
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import Chefs from "../images/Mario and Adrian A.jpg"

const socials = [
  {
    id:0,    
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    id:1, 
    icon: faGithub,
    url: "https://github.com",
  },
  {
    id:2, 
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    id:3,    
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    id:4,	
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
		      <ul>
			      <li><a href="/home">Home</a></li>
			      <li><a href="#about">About</a></li>
		              <li><a href="#menu">Menu</a></li>
		              <li><a href="/reservations">Reservations</a></li>
		              <li><a href="#order">Order Online</a></li>
		              <li><a href="#login">Login</a></li>
		      </ul>
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
	              <li key = {social.url}><a  href= {social.url}><FontAwesomeIcon icon={social.icon} size="2x" /></a></li>
	            ))}
	            </ul>
		</article>
		</div>
	</section>
  </footer>
  );
};
export default Footer;
