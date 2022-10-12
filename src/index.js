import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Home";
import Contact from "./components/Dashboard/Contact";
import Create from "./components/Dashboard/Create";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
