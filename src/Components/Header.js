import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from "react-bootstrap"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div>
 
 <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="home"><Link className='header_text' to='/'>YOUR SHOES</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto navBar">
      <Link className="home" to='/'>Home</Link>
      <Link className="men"to="/Men">Men</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 

        </div>
    )
}

export default Header
