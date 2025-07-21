import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark-green">
      <div className="container-fluid">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <img src="./" alt="Dry Pandas Logo" className="logo-img img-fluid" />
          <h4 className="m-0 brand-text">DRY PANDA</h4>

        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <div className="navbar-nav mx-auto gap-lg-3">
            <a className="nav-link px-3 active" href="#product-details">Product Details</a>
            <a className="nav-link px-3 active" href="#newsroom-section">News Room</a>
            <a className="nav-link px-3 active" href="#careers">Careers</a>
            <a className="nav-link px-3 active" href="#about-section">About Us</a>
            <a className="nav-link px-2" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</a>
          </div>

          <div className="login-wapper d-flex ps-lg-3">
            <a href="./login.html" className="btn btn-outline-light px-3">
              <i className="bi bi-person-fill me-2"></i>Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
