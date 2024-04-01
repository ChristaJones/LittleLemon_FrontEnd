import React from "react";
const testimonialsf = [
  {
  	id:0,
    name: "Person1",
    rating: 4.5,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    getImageSrc: () => require("../assets/images/Person1.jpg"),
  },
  {
  	id:1,
    name: "Person2",
    rating: 5.0,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    getImageSrc: () => require("../assets/images/Person2.jpg"),
  },
  {
  id:2,
    name: "Person3",
    rating: 4.8,
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    getImageSrc: () => require("../assets/images/Person3.jpg"),
  },
];

const Testimonials = () => {
  return (
  <section className = "container" aria-label="testimonials">
	
  	<h1 id="test" className="odd">Testimonials</h1>
  	<div id="body">		
			{testimonialsf.map(testimony => (
	              	<article key = {testimony.id}>
              			<h4>{testimony.rating.toFixed(2)}/5</h4>
              			<div id="article-body">
              				<img src={testimony.getImageSrc()} alt="special"/>
					<h4>{testimony.name}</h4>
				</div>
				<p>{testimony.review}</p>    
			</article>         		
	            	))} 
            	
  	</div>
  </section>
  );
};
export default Testimonials;