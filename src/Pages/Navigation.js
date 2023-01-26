import React from 'react'
import img from "../Assests/Photos/s1.jpg"
const Navigation = () => {
  return (
    <>
     <section id="section" className="section_wrapper">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className="ms-5 rounded" src={img} alt="microsoft" height="50px" width="50px"/>
                <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Disabled</a>
                        </li>
                    </ul>
                        <div className="navbar float-end">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success text-light border-light"
                                    type="submit">Search</button>
                            </form>
                        </div>
                </div>
                </div>
        </nav>
    </section>
    </>
  )
}

export default Navigation;