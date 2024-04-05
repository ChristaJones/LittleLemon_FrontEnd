import {useLocation,  useNavigate} from 'react-router-dom';
import ConfirmationTable from "./ConfirmationTable";

const ConfirmationPage = () => {
	const location = useLocation();
	const data = location.state;
	console.log(data);
	const navigate=useNavigate();
	const handleClick = () =>{
		navigate("/reservations")
	}
	
	
  return (
  <section className = "container">
		  	<h2 style={{textAlign: "center"}}>Reservation Confirmation</h2> 
		  					
					
			<div className="confirmation">
				<ConfirmationTable table = {data} />
				<button onClick={handleClick}>Return to Reservations</button>
			</div>
			
  </section>
  );
};
export default ConfirmationPage;
