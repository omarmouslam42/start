import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Components/footer/Footer';


export default class Nav extends Component {

    

  render() {
    return  <>
        <nav className="navbar navbar-expand-lg navbar-dark position-sticky top-0 w-100 py-2">
  <div className="container">
    <Link className="navbar-brand fs-3 fw-bolder" to="home">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bold  active" aria-current="page" to='portfolio' >PORTFOLIO</Link>
        </li>
        <li className="nav-item mx-4">
          <Link  className="nav-link fw-bold " to="about">ABOUT</Link>
        </li>
        
        <li className="nav-item">
          <Link  className="nav-link fw-bold " to="contact">CONTACT</Link>
        </li>
      </ul>
     
    </div>
  </div>
       </nav>
       <Outlet/>
       <div className='end d-flex justify-content-center align-items-center text-white py-3'>
            <p >Copyright © Your Website 2021</p>
        </div>
      </>
    
  }
}
