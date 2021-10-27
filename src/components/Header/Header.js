import React from 'react';
import {   Button,  Container, Nav, Navbar  } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
 
 
import logo from '../../images/Group 1329.png';
 
import './Header.css';

/* Header component */
const Header = () => {
   
    
    return (
       
              <>
  <Navbar bg="white" sticky="top" collapseOnSelect expand="lg"  variant="dark">
    <Container>
    <Navbar.Brand href="#home"><img className="logo" src= {logo} alt="" /> </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link className="home  "  as={Link}  to="/home">Home</Nav.Link>
     
        <Nav.Link className="home   "  as={Link}  to="/login">Log in</Nav.Link>
      <Nav.Link  className="home " as={Link}  to="/donation">Donation </Nav.Link>
      <Nav.Link  className="home  " as={Link}  to="/events">Events</Nav.Link>
      <Nav.Link  className="home  " as={Link}  to="/blog">Blog</Nav.Link>
      <Nav.Link  className="home " as={Link}  to="/regiter"><Button>Register</Button></Nav.Link>
      <Nav.Link  className="home  " as={Link}  to="/admin"><Button className="btn-dark">Admin</Button></Nav.Link>
      <Navbar.Text className=" text-white">
         
      </Navbar.Text>
    </Navbar.Collapse>
     
    </Container>
  </Navbar>
  

  
</>  
                 
        
     
        
    );
};

export default Header;