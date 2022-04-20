import React, { useEffect, useState } from 'react'
import RideInfoCard from './RideInfoCard'
import { useContext } from 'react';
import { UserStateContext } from '../context/UserContext';
import Filter from './Filter';

/// fourth branch ///

export default function Maincontainer() {
    /// Current path
    const [userSelectedState, setUserSelectedState] = useState('null')

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

    /// New filter
    let upcomingRidesArray = []
    let pastRidesArray = []
    let nearestRidesArray = []

    let today = new Date()

    rideData && rideData.forEach(element => {
        const userStationCode = userData.userData.station_code
        const rideDate = new Date(element.date)

        if (rideDate > today) {
            upcomingRidesArray.push(
                <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
            )
        }
        else if (rideDate < today) {
            pastRidesArray.push(
                <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
            )
        }
        else if (rideDate == today && element.station_path.includes(userStationCode)) {
            nearestRidesArray.push(
                <RideInfoCard id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
            )
        }
    });

    ////

    function handlePath(event) {
        switch (event.target.id) {
            case "past":
                setrideArray(pastRidesArray)
                break;
            case "upComing":
                setrideArray(upcomingRidesArray)
                break;
            case "nearest":
                setrideArray(nearestRidesArray)
                break;
            default:
                break;
        }
    }

    /// All States array
    

    /// handle state and city filter

    let filteredStateArray = [];
    let filteredCityArray = [];

    function handleFilter(event) {
        let queryState = "";
        let queryCity = "";
        
        filteredStateArray = []
        filteredCityArray = []

        if (event.target.id == "state") {
            queryState = event.target.text
            rideData && rideData.forEach(element => {
                if (element.state == queryState) {
                    filteredStateArray.push(element)
                    setUserSelectedState(element.state)
                }    
             });
        }
        else if (event.target.id == "city"){
            queryCity = event.target.text
            rideData.forEach(element => {
                if (element.city == queryCity){
                    filteredCityArray.push(element)
                }
            })
        }

        filteredCityArray.length != 0 && console.log(filteredCityArray) 
    }

    // handleFilter("Karnataka")

    function handleFltr (event) {
        let id = event.target.text
        console.log(id)
    }


    return (
        <div className='px-5 fs-5 mt-4'>
            <div className="navigation text-white d-flex justify-content-between">
                <ul className='d-flex ps-0'>
                    <li><a id="nearest" onClick={handlePath} className="rideLinks text-decoration-none text-white" >Nearest Rides ({nearestRidesArray && nearestRidesArray.length})</a></li>
                    <li className='mx-4'><a id="upComing" onClick={handlePath} className='rideLinks text-decoration-none text-white'>Upcoming Rides ({upcomingRidesArray && upcomingRidesArray.length})</a></li>
                    <li><a id="past" onClick={handlePath} className='rideLinks text-decoration-none text-white' >Past Rides ({pastRidesArray && pastRidesArray.length})</a></li>
                </ul>
                <span><Filter handleFilter={handleFilter} handleFltr={handleFltr} selectedState={userSelectedState} rideData={rideData} /></span>
            </div>
            {rideArray ? rideArray : nearestRidesArray}
        </div>
    )
}
