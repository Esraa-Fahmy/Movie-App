//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../components/Navbar.css'
import { useSelector } from "react-redux";
import React, { useEffect } from 'react';
import {useLanguage } from '../context/Language'
function NavbarApp() {
  const { language, toggleLanguage } = useLanguage();
    useEffect(() => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const count = useSelector(state => state.counter.count)
  return (
    <Navbar expand="lg" className="navbarSection px-3">
      {/* <Container> */}
        <Navbar.Brand href="#home" className='fs-1 fw-bold text-uppercase text-center text-light'><i className="fa-solid fa-video"></i> tmdb</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto  justify-content-around w-50  px-5 ">
            <NavLink   className='text-capitalize fw-bold text-light text-decoration-none' to='/'>movies</NavLink>
            {/* <NavLink   className='text-capitalize fw-bold text-light text-decoration-none' to='/movie-details'>movie details</NavLink> */}
            {/* <NavLink   className='text-capitalize fw-bold text-light text-decoration-none' to='/login'>login</NavLink> */}
            {/* <NavLink   className='text-capitalize fw-bold text-light text-decoration-none'  to='/signup'>sign up</NavLink> */}
            <NavLink   className='text-capitalize fw-bold text-light text-decoration-none' to='/watch-list'><sup><i className=" fa-solid fa-heart">{count}</i></sup> watch list</NavLink>
            <button className='btn btn-light text-dark btn-outline-light'
             onClick={toggleLanguage}> Language 
             <i className="fa-solid fa-language"></i>
             </button>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarApp;