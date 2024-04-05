

export function updateTimes (state, action) {
  	switch(action.type){
  		case "SET_TIME":
  		{
  			console.log("in booking page update times: time")
  			return {
  				...state,
  				times: action.times
  			}
  		}
  		case "SET_DATE":
  		{
  			console.log("in booking page update times: date")
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