import React, { useEffect, useState } from 'react'
import RideInfoCard from './RideInfoCard'
import { useContext } from 'react';
import { UserStateContext } from '../context/UserContext';
import { Link } from 'react-router-dom'

/// Master branch

export default function Maincontainer(props) {
    /// Rides status
    const [rideArray, setrideArray] = useState(null)

    /// Ride Data state
    const [rideData, setRideData] = useState();

    /// User data state
    const userData = useContext(UserStateContext)

    /// Fetching user data from API
    useEffect(() => {
        const getData = async () => {
            let url = 'https://assessment.api.vweb.app/rides'
            let data = await fetch(url)
            let parsedData = await data.json()
            setRideData(parsedData)
        }
        getData()
    }, [])

    /// Fetch user data from API 
    useEffect(() => {
        const getData = async () => {
            let data = await fetch('https://assessment.api.vweb.app/user')
            let parsedData = await data.json()
            userData.setData(parsedData)
        }
        getData();
    }, [])

    const ridesArray = rideData && rideData.map((element) => {
        return <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
    })

    /// Today's Date
    let today = new Date()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = String(today.getMonth() + 1).padStart(2, '0')
    let yyyy = today.getFullYear()
    today = mm + '/' + dd + '/' + yyyy


    /// Upcoming rides
    const upcomingRidesFiltered = rideData && rideData.filter(element => {
        return (element.date.replace(/\//g, "").slice(0, 8) > today)
    })
    const upcomingRidesArray = upcomingRidesFiltered && upcomingRidesFiltered.map(element => {
        return <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
    })

    /// Past rides
    const pastRidesFiltered = rideData && rideData.filter(element => {
        return (element.date.replace(/\//g, "").slice(0, 8) < today)
    })
    const pastRidesArray = pastRidesFiltered && pastRidesFiltered.map(element => {
        return <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
    })

    /// Nearest rides
    let nearestRidesFiltered = []
    const userStationCode = userData.userData.station_code
    rideData && rideData.forEach(element => {
        if(element.station_path.includes(userStationCode)){
            nearestRidesFiltered.push(element)
        }
    }); 
    const nearestRidesArray = rideData && nearestRidesFiltered.map(element => {
        return <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
    })

    const setRideState = (data) => {
        setrideArray(data)
    }

    // Rides switch case
    switch (props.rides) {
        case "upcoming":
            () => {
                setrideArray(upcomingRidesArray)
            }
            break;
        case "past":
            () => {
                setrideArray(pastRidesArray)
            }
            break;
        case "nearest":
            () => {
                setrideArray(nearestRidesArray)
            }
            break;
        default:
            break;
    } 

    return (
        <div className='px-5 fs-5 mt-4'>
            <div className="navigation text-white d-flex justify-content-between">
                <ul className='d-flex ps-0'>
                    <li><Link id="nearest" className="rideLinks text-decoration-none text-white" to="/" >Nearest Rides ({nearestRidesArray && nearestRidesArray.length})</Link></li>
                    <li className='mx-4'><Link id="upComing" className='rideLinks text-decoration-none text-white' to="/upcoming_rides">Upcoming Rides ({upcomingRidesArray && upcomingRidesArray.length})</Link></li>
                    <li><Link id="past" className='rideLinks text-decoration-none text-white' to="/past_rides">Past Rides ({pastRidesArray && pastRidesArray.length})</Link></li>
                </ul>
                <span>Filter</span>
            </div>
            {rideArray ? rideArray : nearestRidesArray}
        </div>
    )
}
