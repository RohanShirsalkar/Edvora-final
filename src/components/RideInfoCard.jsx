import React from 'react'

export default function RideInfoCard(props) {
  // console.log(props.stationPath)
  return (
    // <div>
    <div className="d-flex flex-row justify-content-between card bg-black text-light p-4 mb-4 mt-2">
      <div className="card-left d-flex">
        {/* <img src={props.imgUrl} alt="..." /> */}
        <img src="https://www.certosoftware.com/wp-content/uploads/2020/08/How-to-detect-GPS-tracking-on-your-cell-phone-featured.jpg" className="img-fluid w-25 rounded-start" alt="..." />
        <ul className='fs-5 d-flex flex-column justify-content-around'>
          <li>Ride Id : {props.id}</li>
          <li>Origin Station : { props.origin}</li>
          <li>station_path : { props.path} </li>
          <li>Date : { props.date} </li>
          <li>Distance : N/A</li>
        </ul>
      </div>

      <div className="card-right d-flex flex-row">
        <span className='mx-2'><p>{props.city}</p></span>
        <span className='mx-2'><p>{props.state}</p></span>
      </div>
    </div>
    // </div> 
  )
}