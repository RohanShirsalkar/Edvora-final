import React from 'react'

export default function List(props) {
    return (
        <div>
            <li ><a className="dropdown-item" onClick={props.handleFilter} id={props.locationType} >{props.locationName}</a></li>
        </div>
    )
}
