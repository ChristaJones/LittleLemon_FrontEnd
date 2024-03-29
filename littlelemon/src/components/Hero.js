
import { useNavigate } from 'react-router-dom';
import Restaurant from "../images/restauranfood.jpg"

const Hero = () => {
    const navigate = useNavigate(); 
    const handleClick = () => navigate('/reservations'); 
  return (
  <section className = "container">
      <div id="body">
	      <article >
	      	<h1 className="odd">Little Lemon</h1>
		<h3>Chicago</h3> 
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		</p>
		<button onClick={handleClick}>Reserve Table</button>
	      </article>
	      <article>
	      <img src={Restaurant} alt="restaurant" />
	      </article>
      </div>
  </section>
  );
};
export default Hero;
