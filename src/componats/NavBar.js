import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../assites/logo.png'
import {FaLocationArrow} from "react-icons/fa"
import {BsSearch} from "react-icons/bs"
import {BsTelephoneOutboundFill} from "react-icons/bs"
import './NavBar.css'
function NavBar() {
  return (
    <Navbar fixed="top" expand="lg"   >
      <Container>
        <Navbar.Brand href="#home"> 
        <img src={logo}/>
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">FAQ's</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> Booking</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">  Error 404</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">  Login / Register</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Services Details</NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Blog Details</NavDropdown.Item>
             
            </NavDropdown>
         {/* ---------------Fix This --------------- */}
            <Nav.Link  >  <BsSearch/> </Nav.Link>
            <Nav.Link >  <i><BsTelephoneOutboundFill/> </i>  +093456789</Nav.Link>
         {/* -----------------Fix This------------- */}
         <Nav.Link href="#link">
            <button>   Contact Us     <span> <FaLocationArrow/></span> </button>
         </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

//
//

//
//
// 

export default NavBar;
