
import { Formik, Field, Form, ErrorMessage} from "formik";
import * as Yup from 'yup';

import './BookingForm.css';

const BookingForm = (props) => {


  
 
  return (
  <Formik className="container"
	initialValues={{ firstName: '', lastName: '',email: '', date:'', time:'',guests:'', role:''}}
        onSubmit={(values, onSubmitProps) => {
                console.log("submit")
                props.handleSubmit(values)
              
                
         }}
    
       validationSchema={Yup.object({
	      firstName: Yup.string().min(3, "First Name needs to be longer").required('Required'),      
	      email:Yup.string().email("Invalid email address").required("Required"),
	      date:Yup.date().required("Required"),
	      time:Yup.string().required("Required"),
	      guests: Yup.number().min(2, "Parties must be larger than 1").max(10, "Parties cannot exceed 10" ).required("Required"),
	      role:Yup.string().required("Required"),
	    })}
  >
  
	 { values =>(
	 	 <Form >	       
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="firstName"> First Name <sup>*</sup></label>
	            		</div>
	            		<div className="col-75">
		            		<Field  className="field" id="firstName" name="firstName"/>
		            		<ErrorMessage className="error" name="firstName">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
	            		</div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="lastName">Last Name</label>
				</div>	
				<div className="col-75">            
	            			<Field className="field" id="lastName" name="lastName"/>
	            			<ErrorMessage name="lastName" />
	           		 </div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="email"> Email Address <sup>*</sup> </label>
				</div>
				<div className="col-75">	            
	            			<Field className="field" type="email" name="email"/>
	            			<ErrorMessage className="error" name="email">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
	            		</div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="date">Date <sup>*</sup></label>
				</div>	 
				<div className="col-75">           
	            			<Field className="field" type="date" name="date" onChange={(e)=>{
	            				props.dispatch({ type: "SET_DATE", date: e.target.value})
	            				values.setFieldValue("date", e.target.value)
	            			}}  />
	            			<ErrorMessage className="error" name="date">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
	            		</div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="time">Time <sup>*</sup></label>
				</div>	    
				<div className="col-75">        
	            			<Field className="field" as = "select" id="time" name="time">
	            				<option>--:--</option>		         
            		  			{props.times.map(available => (   
						<option key={available}>{available}</option>
            					))} 
		   			</Field>
		   			<ErrorMessage className="error" name="time">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
		   		</div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="guests"> Number of Guests <sup>*</sup></label>
	            		</div>
	            		<div className="col-75">
	            			<Field className="field" min="0" name="guests" type="number"/>
	            			<ErrorMessage className="error" name="guests">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
	            		</div>
	          	</div>
	          	<div className="form-group">
	          		<div className="col-25">
	            			<label htmlFor="role">Occasion <sup>*</sup></label>
				</div>	
				<div className="col-75">            
	            			<Field className="field" as = "select" name="role">
				              <option  value="occasion">Occasion</option>
				              <option  value="Birthday">Birthday</option>
				              <option value="Anniversary">Anniversary</option>
				              <option value="Other">Other</option>
	            			</Field>
	            			<ErrorMessage className="error" name="role">
		            			{ msg => <div style={{ color: 'red' }}>{msg}</div> }
		            		 </ErrorMessage>
	            		</div>
	          	</div>
	          	<div id="book-button">
	          <button type="submit">
	            Book
	          </button>
	          </div>
  	</Form>
  	)}
  </Formik>
  );
};
export default BookingForm;