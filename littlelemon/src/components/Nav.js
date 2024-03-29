import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../images/Logo.svg";

const NavSection = () => {
  return (
  <div>
 
   		  	
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="/home">
            <img src={Logo} alt="logo"/>
          </Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="me-auto">
			      <Nav.Link href="/home">Home</Nav.Link>
		              <Nav.Link href="#about">About</Nav.Link>
		              <Nav.Link href="#menu">Menu</Nav.Link>
		              <Nav.Link href="/reservations">Reservations</Nav.Link>
		              <Nav.Link href="#order">Order Online</Nav.Link>
		              <Nav.Link href="#login">Login</Nav.Link>
		      </Nav>
	      </Navbar.Collapse>
      </Container>
    </Navbar>
    	 
      </div>
  );
};
export default NavSection;
   
            