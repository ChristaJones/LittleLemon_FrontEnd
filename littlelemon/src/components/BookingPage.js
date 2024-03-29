import { useEffect, useReducer} from "react";
import BookingForm from "./BookingForm";
import {fetchAPI, submitAPI} from "./API";
import { format } from 'date-fns';
import { useNavigate} from "react-router-dom";
 

  const initState = {
  	date: format(new Date(), 'yyyy-MM-dd'),
  	times: []
  }

  const initializeTimes = (initState) => {
  	 let time = []
  		fetchAPI(initState.date)
		.then(response=>
		{
			time = response
					
		})
	return {
		date:	initState.date,
		times: time
	}
  }
   	 
  const updateTimes = (state, action) =>{
  	switch(action.type){
  		case "GET_TIME":
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
  			return state;
  	}
  	
  } 



const BookingPage = () => {
	const [availableTimes, dispatch] = useReducer(updateTimes, initState, initializeTimes)	
	const navigate=useNavigate();
	useEffect(() => {
		fetchAPI(availableTimes.date)
		.then(response=>
		{
			dispatch({ type: "GET_TIME", payload: response})		
		})
		.catch(error =>
		{})
	});
		
     const submitForm  = (formData) => {
  	
  	if(submitAPI(formData))
  	{
  		navigate("/confirmation", {state: formData})
  	}	
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


