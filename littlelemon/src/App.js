import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Layout from "./components/Layout";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import ConfirmationPage from "./components/ConfirmationPage";

import { Routes, Route} from "react-router-dom";

function App() {

  return (
  
   <div >
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Main />}/>		     
		    	<Route path="home" element={<Main />}/>
		        <Route path="reservations" element={<BookingPage />}/>
		        <Route path="confirmation" element={<ConfirmationPage />}/>
		</Route>
        </Routes>
    </div>

  );
}

export default App;
