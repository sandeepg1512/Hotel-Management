import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={require("./images/Hotel_icon.png")} class="d-inline-block align-top" alt="" />
                        HOTEL ON TOUCH
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                                <div class="dropdown-menu">
                                    <Link to="/" class="dropdown-item">Book your room</Link>
                                    <Link to="/" class="dropdown-item">View Bookings</Link>
                                    {/* <Link to="/" class="dropdown-item">Sent Items</Link>
                                    <div class="dropdown-divider"></div>
                                    <Link to="/" class="dropdown-item">Trash</Link> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Gallary" >Gallary</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/ContactUs">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Signup">Signup</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}
