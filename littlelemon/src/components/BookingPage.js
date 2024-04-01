import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import { useDate} from "./DateContext";
import { format } from 'date-fns';
import { useNavigate} from "react-router-dom";
 
const today = format(new Date(), 'yyyy-MM-dd')


	 
  const updateTimes = (state, action) =>{
  	switch(action.type){
  		case "SET_TIME":
  		{
  			
  			return {
  				...state,
  				times: action.payload
  			}
  		}
  		case "SET_DATE":
  		{
  			return {
  				...state,
  				date: action.date
  			}
  		}
  		default:
  		{
			return state;  		
  		}	
  	}
  	
  } 



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
			        	const check = availableTimesByDate.find(available => available.date === date).timeavail 
			            if(check){
			            	console.log("check works")
			                resolve(check)
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
			dispatch({ type: "SET_TIME", payload:response})		
		})
		.catch(error =>
		{})
	});
		
     	const submitForm  = (formData) => {
  		
  		submitAPI(formData)
  		.then(response=>
  		{  	
  			console.log("response:",response)	
  			if(response){
  				console.log("in response:",response)
  				
  				const nextAvailableTimesByDate = availableTimesByDate.map((available) => { 
									      	
				      	if (available.date === formData.date) {
				        // Increment the clicked counte
				          const newTime=available.timeavail.filter(time => time !== formData.time);				       				   
				          console.log("in if:", available.timeavail)
				       		return {...available,
				       		timeavail:newTime}	  
				      } 
				      console.log("in next:", available)
				     return available
				});
				console.log("next:",nextAvailableTimesByDate)
  				setAvailableTimesByDate(nextAvailableTimesByDate)	
	  			navigate("/confirmation", {state: formData})
	  			console.log(availableTimesByDate)
  			}
  		})
  		.catch(error =>{})
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


