import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="#">Edvora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    
                        <form className="d-flex ms-auto align-items-center">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            <span className=' fw-bold text-white me-3'>Rohan Shirsalkar</span>
                            <img src="https://picsum.photos/200" alt="error" width="40" height="40" class="rounded-circle me-2" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
