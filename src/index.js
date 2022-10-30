import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup";
import Home from "./components/Dashboard/Home";
import Contact from "./components/Dashboard/Contact";
import Create from "./components/Dashboard/Create";
import Category from "./components/Dashboard/Category";
import Blog from "./components/Dashboard/BlogPages";
import EditCategory from "./components/Dashboard/Category/EditCategory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/create-blog" element={<Create />}></Route>
          <Route exact path="/create-category" element={<Category/>}></Route> 
          <Route exact path="/edit-category" element={<EditCategory/>}></Route> 
          <Route exact path="/blog" element={<Blog />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
