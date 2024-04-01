import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/Logo.svg";
import { Link } from 'react-router-dom';
const NavSection = () => {
	//const {availableTimesByDate, setAvailableTimesByDate} = useDate()
  return (
  <div>
 
   		  	
  <Navbar expand="lg" className="bg-body-tertiary" aria-label="main-navigation">
      <Container>
      <Navbar.Brand as={Link} to="/home">
            <img src={Logo} alt="logo"/>
          </Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			      <Nav.Link as={Link} to="/home">Home</Nav.Link>
		              <Nav.Link as={Link} to="#about">About</Nav.Link>
		              <Nav.Link as={Link} to="#menu">Menu</Nav.Link>
		              <Nav.Link as={Link} to="/reservations">Reservations</Nav.Link>
		              <Nav.Link as={Link} to="#order">Order Online</Nav.Link>
		              <Nav.Link as={Link} to="#login">Login</Nav.Link>
		      </Nav>
	      </Navbar.Collapse>
      </Container>
    </Navbar>
    	 
      </div>
  );
};
export default NavSection;
   
   
            
