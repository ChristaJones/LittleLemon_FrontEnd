import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import BookingPage from "./components/BookingPage";
import ConfirmationPage from "./components/ConfirmationPage";

import { Routes, Route} from "react-router-dom";

function App() {
  return (
   <div >
	<Header />
	  <Routes>
        <Route path="/" element={<Main />}></Route>
    	<Route path="/home" element={<Main />}></Route>
        <Route path="/reservations" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmationPage />}></Route>
       </Routes>
	<Footer />
    </div>

  );
}

export default App;
