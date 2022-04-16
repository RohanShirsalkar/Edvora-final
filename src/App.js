import Maincontainer from "./components/Maincontainer";
import Navbar from "./components/Navbar";
import './App.css'
import { useEffect } from "react";
import {UserState} from "./context/UserContext"

function App() {

  return (
    <>
      <UserState>

        <Navbar />
        <Maincontainer />

      </UserState>
    </>
  );
}

export default App;