import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './Home';
import DonorComponent from './Donor';
import RequesterComponent from './Requester';
import AboutComponent from './About';

const CustomNavbar = () => {
  return (
    <>
      <Router>
        <Container className=' mx-3'>
          <Navbar bg="dark" expand="lg" className="h-auto mt-5 border-black text-uppercase rounded-5 p-2" style={{width:"80rem"}}>
            <Navbar.Brand className=' m-5 text-danger fw-bold fs-1' href="/">RaktDaan</Navbar.Brand>
            <Navbar.Toggle className="navbar-dark" aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <Nav className="ml-auto mx-auto">
                <Nav.Link className='text-white m-lg-5 fs-4' as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link className='text-white m-lg-5 fs-4' as={NavLink} to="/donor">Donor</Nav.Link>
                <Nav.Link className='text-white m-lg-5 fs-4' as={NavLink} to="/requester">Requester</Nav.Link>
                <Nav.Link className='text-white m-lg-5 fs-4' as={NavLink} to="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <Routes>
          <Route path="/donor" element={<DonorComponent />} />
          <Route path="/requester" element={<RequesterComponent />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default CustomNavbar;
