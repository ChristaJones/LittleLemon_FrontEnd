
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Chefs from "../images/Mario and Adrian A.jpg"
import { Link } from 'react-router-dom';

const socials = [
  {   
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  { 
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {    
    icon: faMedium,
    url: "https://medium.com",
  },
  {	
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Footer = () => {
  return (
  <footer>
  	<section className = "container">
  		
  		<div id="body">
  		<article>
  			<img src={Chefs} alt="chefs" />
  		</article>
		<article>
			<nav aria-label="footer-navigation">
			      <ul>
				      <li><Link to="/home">Home</Link></li>
				      <li><Link to="#about">About</Link></li>
			              <li><Link to="#menu">Menu</Link></li>
			              <li><Link to="/reservations">Reservations</Link></li>
			              <li><Link to="#order">Order Online</Link></li>
			              <li><Link to="#login">Login</Link></li>
			      </ul>
			</nav>
		</article>
		<article>
			<h4>Contact</h4>
			<p>
				Address: 123 Clover Street, Chicago Illinois<br/>
			
				Phone Number: 752-338-9174 <br/>
				
				Email: littlelemon@restaurant.com
			</p>
		</article>
		<article>
			<ul>
			{socials.map(social => (
	              <li key = {social.url}><Link to= {social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></Link></li>
	            ))}
	            </ul>
		</article>
		</div>
	</section>
  </footer>
  );
};
export default Footer;
