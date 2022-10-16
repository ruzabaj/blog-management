import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../footer";
import "../../../sass/home.scss";
import Data from "../Data";

const Home = () => {
  const [userData, setUserData] = useState(Data);
  const [descriptionshow, setDescriptionShow]= useState(true)

  const showCategoryCard = (item) => {
    const updatedId = Data.filter((element)=>{
      return element.category === item
    });
    setUserData(updatedId)
  }
  const showMore=()=>{
    console.log("clicked",descriptionshow)
    setDescriptionShow(!descriptionshow);
  }
  // useEffect(() => {
  //   axios.get("http://localhost:5000/blog/");
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="home-bg">
        <img src="blog.jpg" alt="home-bg" className="home-bg-img" />
      </div>
      <div className="category-btns">
        <button className="btn-category" onClick={()=>showCategoryCard('Travel')}>
          Travel
        </button>
        <button className="btn-category" onClick={()=>showCategoryCard('Music')}>
          Music
        </button>
        <button className="btn-category" onClick={()=>showCategoryCard('Food')}>
          Food
        </button>
        <button className="btn-category" onClick={()=>showCategoryCard('Comedy')}>
          Comedy
        </button>
        <button className="btn-category" onClick={()=>showCategoryCard('Lifestyle')}>
          Lifestyle
        </button>
        <button className="btn-category" onClick={()=>showCategoryCard('Fiction')}>
          Fiction
        </button>
      </div>
        <div className="container">
          <div className="row">
      {userData.map((element) => (
            <div className="col-4" key={element.id}>
              <div className="card" >
                <img
                  src={element.image}
                  className="card-img"
                  alt="user-profile"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <div className="read-edit-delete">
                    <button className="btn-more" onClick={showMore}>Read More</button>
                    <button className="btn-delete" onClick={showMore}>Delete</button>
                    <button className="btn-edit" onClick={showMore}>Edit</button>
                  </div>
                </div>
              </div>
            </div>
      ))}
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;
