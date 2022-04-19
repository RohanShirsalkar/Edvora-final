import React from 'react'

export default function Filter() {
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
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
              <div className="dropdown my-2">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "120px" }}>
                  Select City
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="modal-footer"> */}
            {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>

      <a className="text-decoration-none text-white" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Filters</a>
    </div>
  )
}
