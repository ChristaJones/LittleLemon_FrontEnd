

export function updateTimes (state, action) {
  	switch(action.type){
  		case "SET_TIME":
  		{
  			return {
  				...state,
  				times: action.times
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