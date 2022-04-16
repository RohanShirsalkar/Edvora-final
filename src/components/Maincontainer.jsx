import React, { useEffect, useState } from 'react'
import RideInfoCard from './RideInfoCard'
import { useContext } from 'react';
import { UserStateContext } from '../context/UserContext';

export default function Maincontainer(props) {
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
    useEffect(()=>{
        const getData = async () => {
            let data = await fetch('https://assessment.api.vweb.app/user')
            let parsedData = await data.json()
            userData.setData(parsedData)
        }
        getData();
    }, [])
    console.log(userData.userData.station_code)
    const ridesArray = rideData && rideData.map((element)=>{
        return <RideInfoCard key={element.id} id={element.id} origin={element.origin_station_code} path={element.station_path} date={element.date} city={element.city} state={element.state} imgUrl={element.map_url} />
    })  

    return (
        <div className='px-5 fs-5 mt-4'>
            <div className="navigation text-white d-flex justify-content-between">
                <ul className='d-flex ps-0'>
                    <li><a>Nearest Rides (2)</a></li>
                    <li className='mx-4'><a>Upcoming Rides (2)</a></li>
                    <li ><a>Past Rides (2)</a></li>
                </ul>
                <span>Filter</span>
            </div>
            {/* <RideInfoCard/> */}

            {ridesArray}
        </div>
    )
}
