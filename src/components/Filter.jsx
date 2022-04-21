import React from 'react'
import List_Item from './List_Item'


export default function Filter(props) {

  let allCitys = props.rideData && props.rideData.map(element => {
    return(
      <List_Item handleFilter={props.handleFilter} locationType={"city"} locationName={element.city}  />
    )
  })

  let allStates = props.rideData && props.rideData.map(element => {
    return (
      <List_Item handleFilter={props.handleFilter} locationType={"state"} locationName={element.state}  />
    )
  })

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
                  {props.selectedState == null ?  "Select state" : props.selectedState}
                </button>
                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuButton1"  style={{height : "200px"}}>
                  {allStates}
                </ul>
              </div>
              <div className="dropdown my-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "120px" }}>
                  Select City
                </button>
                <ul className="dropdown-menu overflow-auto" aria-labelledby="dropdownMenuButton2" style={{maxHeight: "200px"}} >
                  {stateCitys.length == 0 ? allCitys : stateCitys}
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
