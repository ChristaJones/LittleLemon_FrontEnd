import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import { updateTimes} from "../reducers/UpdateTimes";
import { useDate} from "../context/DateContext";
import { format } from 'date-fns';
import { useNavigate} from "react-router-dom";
 
const today = format(new Date(), 'yyyy-MM-dd')

const BookingPage = () => {
	const {availableTimesByDate, setAvailableTimesByDate} = useDate()
	const initState = {
	  	date: today,
	  	times: availableTimesByDate.find(available => available.date === today).timeavail,
  	}
	const [availableTimes, dispatch] = useReducer(updateTimes, initState)	
	const navigate=useNavigate();
	const submitAPI = (formData) => {	    
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        if (formData) {
	          resolve(true); // Simulate successful submission
	        } else {
	          reject(new Error('Form submission failed.'));
	        }
	      }, 1000); // Simulate API delay
	    });
	  }

	useEffect(() => {
		
		  const fetchAPI = (date) => {
		    	return new Promise((resolve, reject) => {
			        setTimeout(() =>{
			        	//const check = availableTimesByDate.find(available => available.date === date).timeavail 
			            if(availableTimesByDate.find(available => available.date === date)){			            	
			                resolve(availableTimesByDate.find(available => available.date === date).timeavail)
			            }
			            else{
			                reject(new Error('No available times for the selected date.'));
			            }
			        } , 1000)
		    	})
		  }
		  
		fetchAPI(availableTimes.date)
		.then(response=>
		{
			
			dispatch({ type: "SET_TIME", times:response})	
				
		})
		.catch(error =>
		{
			console.log("No Dates")	
			dispatch({ type: "SET_DATE", date: today})	
		})
	}, [availableTimes.date, availableTimesByDate]);
		
     	const submitForm  = (formData) => {
  		
  		submitAPI(formData)
  		.then(response=>
  		{  		
  			if(response){
  				
  				const nextAvailableTimesByDate = availableTimesByDate.map((available) => { 
									      	
				      	if (available.date === formData.date) {
				        // Increment the clicked counte
				          const newTime=available.timeavail.filter(time => time !== formData.time);				       				   
				          
				       		return {...available,
				       		timeavail:newTime}	  
				      } 
				      
				     return available
				});
				
  				setAvailableTimesByDate(nextAvailableTimesByDate)	
	  			navigate("/confirmation", {state: formData})
	  			
  			}
  		})
  		.catch(error =>{
			  		
  		})
  	}
  			
  return (
    <div className="container">	
		
		<h2 style={{textAlign: "center"}}>Reservations</h2>
	<div className="reservation">
		<BookingForm times = {availableTimes.times} dispatch = {dispatch} handleSubmit = {submitForm}/>
	</div>
    </div>
  );
}

export default BookingPage;


