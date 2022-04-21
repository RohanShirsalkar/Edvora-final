import Maincontainer from "./components/Maincontainer";
import Navbar from "./components/Navbar";
import './App.css'
import { useEffect } from "react";
import { UserState } from "./context/UserContext"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <>
    

        <UserState>


          <Navbar />
          <Maincontainer />

{/* 
          
            <Route path={"/"} element={<Maincontainer rides={"nearest"} />} />
            <Route path={"/upcoming_rides"} element={<Maincontainer rides={"upcoming"} />} />
            <Route path={"/past_rides"} element={<Maincontainer rides={"past"} />} />
           */}

        </UserState>

      
    </>
  );
}

export default App;