import React from 'react'
import { useContext } from 'react'
import { UserStateContext } from '../context/UserContext'

export default function Navbar() {
    const contextData = useContext(UserStateContext)
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-4" href="#">Edvora</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    
                        <form className="d-flex ms-auto align-items-center">
                            <span className=' fw-bold text-white me-3'>{contextData.userData.name}</span>
                            <img src={contextData.userData.url} alt="error" width="40" height="40" className="rounded-circle me-2" />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
