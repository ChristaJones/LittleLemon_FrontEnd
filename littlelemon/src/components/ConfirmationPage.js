import {useLocation} from 'react-router-dom';
import ConfirmationTable from "./ConfirmationTable";

const ConfirmationPage = () => {
	const location = useLocation();
	const data = location.state;
	console.log(data);
  return (
  <section className = "container">
		  	<h2 style={{textAlign: "center"}}>Reservation Confirmation</h2> 
		  					
					
			<div className="confirmation">
				<ConfirmationTable table = {data} />
			</div>
			
  </section>
  );
};
export default ConfirmationPage;
