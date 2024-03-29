
import Chefs from "../images/Mario and Adrian b.jpg"
import Chef from "../images/restaurant chef B.jpg"
const About = () => {
  return (
  <section className = "container">
	<div id = "body">
	  	<article>
		  	<h1>Little Lemon</h1>
			<h3>Chicago</h3> 
			<p>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
			</p>
	  	</article>
	  	<article>
	  		<div className ="img-container">
			<img id="img_top" src={Chefs} alt="chefs"/> 
			<img id="img_bottom" src={Chef} alt="chef"/>
			</div>  	
	  	</article>
  	</div>
  </section>
  );
};
export default About;
