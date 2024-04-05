import React from 'react'
import { fireEvent, render, renderHook, act, screen, waitFor } from '@testing-library/react';
import { updateTimes } from './reducers/UpdateTimes';
import BookingPage from './components/BookingPage';
import BookingForm from "./components/BookingForm";
import { DateProvider} from "./context/DateContext";
import { BrowserRouter } from "react-router-dom";

const initialTimesByDate = [
	
    { date: '2024-03-27', timeavail: ['10:00', '11:00', '12:00']},
    { date: '2024-03-28', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-03-29', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-03-30', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-03-31', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-01', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-02', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-03', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-04', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-05', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-06', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-07', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-08', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-09', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-10', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-11', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-12', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-13', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-14', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-15', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-16', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-17', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-18', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-19', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
    { date: '2024-04-20', timeavail: ["17:00", "18:00","19:00","20:00","21:00","22:00"]},
  ];

test("Verify Booking Page Renders", () =>{
    render(<BrowserRouter><DateProvider><BookingPage /></DateProvider></BrowserRouter>);
    const headingElement = screen.getByText("Reservations");
    expect(headingElement).toBeInTheDocument();
})

test("Verify initializeTimes function works", () =>{
    const onSubmit = jest.fn();
    const dispatch = jest.fn();
    const setAvailtimes = jest.fn();
    const availtimes =  initialTimesByDate;  
    act(() => {
    	render(<BrowserRouter><DateProvider value = {[availtimes, setAvailtimes ]}><BookingPage  onSubmit={onSubmit}/></DateProvider></BrowserRouter>);
    })  
    //expect(setAvailtimes).toHaveBeenCalledTimes(1);  
    expect(screen.getAllByTestId('select-time')).toHaveLength(6)    
})

test("Verify updateTimes function works for time", () =>{
    const initState = {
	  	date: "2024-03-27",
	  	times: ["17:00", "18:00","19:00","20:00","21:00","22:00"]
  	} 
  	
    const newState = {
    		date: "2024-03-27",
	  	times: ["10:00", "11:00", "12:00"]
    } 
    
    const updateAction = {type: 'SET_TIME', times: ['10:00', '11:00', '12:00']}
   const updatedState = updateTimes(initState, updateAction);
  expect(updatedState).toEqual(newState);
})

test("Verify updateTimes function works for date", () =>{
    const initState = {
	  	date: "2024-04-05",
	  	times: ["17:00", "18:00","19:00","20:00","21:00","22:00"],
  	} 
    const newState = {
    		date: "2024-03-27",
	  	times: ["17:00", "18:00","19:00","20:00","21:00","22:00"],
    } 
  const updateAction = {type: 'SET_DATE', date: "2024-03-27"};
  const updatedState = updateTimes(initState, updateAction);
  expect(updatedState).toEqual(newState);

})

