import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import "../../../sass/home.scss";
import Data from "../Data";
// import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState(Data);
  useEffect(() => {
    // axios.get('http://localhost:5000/blog/')
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home-bg">
        <img src="blog.jpg" alt="home-bg" className="home-bg-img" />
      </div>
      {/* {category.map((id)=>(
        <div>
        </div>
        ))} */}
      {userData.map((element) => (
        <div class="card" key={element.id}>
          <button>{element.category}</button>
          <img src="user-profile.png" className="card-img" alt="user-profile" />
          <div class="card-body">
            <h5 class="card-title">{element.title}</h5>
            <p class="card-text">{element.description}</p>
            <button className="btn-user-profile">More</button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
