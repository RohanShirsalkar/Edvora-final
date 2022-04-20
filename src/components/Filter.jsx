import React from 'react'
import List_Item from './List_Item'


export default function Filter(props) {

  let allStates = props.rideData && props.rideData.map(element => {
    return (
      <List_Item handleFilter={props.handleFilter} locationType={"state"} locationName={element.state}  />
    )
  })

  // let stateCitys = props.rideData && props.rideData.map(element => {
  //   return (
  //     element.state == props.selectedState ? element.city : "no no"
  //   )
  // })

  // console.log(props.selectedState)

  let stateCitys = []
  props.rideData && props.rideData.forEach(element => {
    if(element.state == props.selectedState){
      stateCitys.push(
        <List_Item handleFilter={props.handleFilter} locationType={"city"} locationName={element.city}  />
      )
    }
  });
  // console.log(stateCitys)

  return (
    <div>
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog  modal-dialog-centered " style={{ width: "200px" }}>
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">Filters</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"> </button>
            </div>
            <div className="modal-body d-flex align-items-center flex-column">
              <div className="dropdown ">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "120px" }}>
                  Select State
                </button>
                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuButton1"  style={{height : "200px"}}>
                  {/* <li><a className="dropdown-item" onClick={props.handleFilter} id='state' href="#">Tamil Nadu</a></li>
                  <li><a className="dropdown-item" onClick={props.handleFilter} id='state' href="#">Rajasthan</a></li>
                  <li><a className="dropdown-item" onClick={props.handleFilter} id='state' href="#">Telangana</a></li> */}
                  {allStates}
                </ul>
              </div>
              <div className="dropdown my-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "120px" }}>
                  Select City
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2" >
                  {/* <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                  <List_Item handleFilter={props.handleFilter} location={"city"} locationName={"Place with no name"}  /> */}
                  {stateCitys}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a className="text-decoration-none text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Filters</a>
    </div>
  )
}
