import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const specialsf = [
  {
  	id:0,
    title: "Greek salad",
    price: 12.99,
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    getImageSrc: () => require("../images/greek salad.jpg"),
  },
  {
  	id:1,
    title: "Bruschetta",
    price: 5.99,
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    getImageSrc: () => require("../images/bruschetta.jpg"),
  },
  {
  	id:2,
    title: "Lemon Dessert",
    price: 5.00,
    description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("../images/lemon dessert.jpg"),
  },
];

const Specials = () => {
  return (
  <section className = "container">
  	<div id = 'title'>
	  	<h1>Specials</h1>
		<button>Online Menu</button>
  	</div>
  	<div id='body'>
		
			{specialsf.map(special => (   
			<article key = {special.title}>          		
              			<img src={special.getImageSrc()} alt="special" width="125em"/>      					
				<h2>{special.title}</h2>
				<p>{special.description}</p>				
				<h5>${special.price.toFixed(2)}</h5>				
				<a href="#order">Order for delivery <FontAwesomeIcon icon={faBicycle} /></a>	         		
         		</article> 
            	))} 	
            	
  	</div>
  </section>
  );
};
export default Specials;