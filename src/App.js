import Signup from "./components/Signup";
import Login from "./components/Login/Login";
import Router from "./Router/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate =useNavigate();

  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
