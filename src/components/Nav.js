import React from 'react'
import { Link } from 'react-router-dom';
import samosa from '../assets/images/logo.jpg';
const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={samosa} alt="Logo" width="60px" height="60px" class="d-inline-block align-text-top rounded-circle"></img>


          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/Home" style={{ textDecoration: "None" }}><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/About" style={{ textDecoration: "None" }}><a class="nav-link active" href="#">About Us</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/Tours" style={{ textDecoration: "None" }}><a class="nav-link active" href="#">Tours</a></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Contact Us</a>
              </li>
              
            </ul>
            <form class="d-flex">
              {/* <button class="btn btn-outline-success m-2" type="submit">login</button>
        <button class="btn btn-outline-success m-2" type="submit">Sign Up</button> */}
              <div class="dropdown">
                <button type="button" class="btn btn-outline-success dropdown-toggle m-2" data-bs-toggle="dropdown">
                  Login
                </button>
                <ul class="dropdown-menu">
                  <li><Link to="/adminLogin" class="dropdown-item" href="#">Admin</Link></li>
                  <li><Link to="/managerLogin" class="dropdown-item" href="#">Manager</Link></li>
                  <li><Link to="/customerLogin" class="dropdown-item" href="#">Customer</Link></li>
                </ul>
              </div>
              <div class="dropdown">
                <button type="button" class="btn btn-outline-success dropdown-toggle  m-2" data-bs-toggle="dropdown">
                  Register
                </button>
                <ul class="dropdown-menu">          
                  <li><Link to="/customerSignup" class="dropdown-item" href="#">Customer</Link></li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* <Link to="/About" className='btn btn-outline-primary btn-sm'>About</Link>{" "}
          <Link to="/Home" className='btn btn-outline-primary btn-sm'>About</Link>{" "} */}
    </div>
  )
}

export default Nav
