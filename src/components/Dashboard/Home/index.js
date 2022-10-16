import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import "../../../sass/home.scss";
import Data from "../Data";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState(Data);
  const showCategoryCard = () => {
    //   let categoryCard= userData.filter((element)=== filter.category)
  };
  useEffect(() => {
    axios.get("http://localhost:5000/blog/");
  }, []);
  return (
    <div>
      <Navbar />
      <div className="home-bg">
        <img src="blog.jpg" alt="home-bg" className="home-bg-img" />
      </div>
      <div className="category-btns">
        <button className="travel" onClick={showCategoryCard}>
          Travel
        </button>
        <button className="music" onClick={showCategoryCard}>
          Music
        </button>
        <button className="food" onClick={showCategoryCard}>
          Food
        </button>
        <button className="comedy" onClick={showCategoryCard}>
          Comedy
        </button>
        <button className="life" onClick={showCategoryCard}>
          Lifestyle
        </button>
        <button className="style" onClick={showCategoryCard}>
          Fiction
        </button>
      </div>
      {userData.map((element) => (
        <div>
          <div className="card" key={element.id}>
            <img src={element.image} className="card-img" alt="user-profile" />
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
              <button className="btn-user-profile">More</button>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Home;
