import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';


export default function AppNavbar() {

  const [user, setUser] = useState(localStorage.getItem("token"));
  console.log(user);

	return (
		<Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/">Zuitt Booking</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact="true">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/courses" exact="true">Courses</Nav.Link>
                <Nav.Link as={NavLink} to="/news" exact="true">News</Nav.Link>
                {(user !== null) ?
                  <Nav.Link as={NavLink} to="/logout" exact="true">Logout</Nav.Link>
                  :
                  <>
                  <Nav.Link as={NavLink} to="/login" exact="true">Login</Nav.Link>
                  <Nav.Link as={NavLink} to="/register" exact="true">Register</Nav.Link>
                </>
              }
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
	)
}