import { format } from 'date-fns';

import './ConfirmationTable.css';

const ConfirmationTable = (props) => {

	return(
		<>	
				<p>
				Your Reservation has been confirmed				
				</p>	
				<br/> 				 
				<table>
				<tbody>
				  <tr>
				    <th colSpan={2}>Details</th>
				  </tr>
				  <tr>
				    <td>Name:</td>
				    <td id="table-data">{props.table.firstName} {props.table.lastName}</td>
				  </tr>
				  <tr>
				    <td>Date:</td>
				    <td id="table-data">{props.table.date}</td>
				  </tr>
				  <tr>
				    <td>Time:</td>
				    <td id="table-data">{props.table.time}</td>
				  </tr>
				  <tr>
				    <td>Guests:</td>
				    <td id="table-data">{props.table.guests}</td>
				  </tr>
				  <tr>
				    <td>Occasion:</td>
				    <td id="table-data">{props.table.role}</td>
				  </tr>
				  </tbody>
				</table>
				<br/>
				<br/>
				<p>
					For any changes or cancellations please call 752-338-9174 or email littlelemon@restaurant.com
				
				</p>
			</>
	);
};
export default ConfirmationTable;