import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function App() {
  let navigate =useNavigate();

  useEffect(() => {
    navigate("/login")
  }, [])

  return (
    <div className="App">    </div>
  );
}

export default App;
