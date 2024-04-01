import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import '../assets/styles/Main.css';
const Main = () => {
  return (
  <main>
  	<Hero />
  	<Specials />
  	<Testimonials />
  	<About/>
  </main>
  );
};
export default Main;