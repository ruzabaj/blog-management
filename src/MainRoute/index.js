import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Dashboard/Home";
import Contact from "../components/Dashboard/Contact";
import Create from "../components/Dashboard/Create";

const MainRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default MainRoute;
