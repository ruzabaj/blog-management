import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import Delete from "./modal";
import Image from "../Carousel/Image";
import CategoryButton from "./category";
import "../../../sass/home.scss";
import Data from "../Data";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState(Data);

  const navigate = useNavigate();

  const switchPage = () => {
    console.log("clicked readmore");
    navigate("/blog");
  };
  
  // useEffect(() => {
  //   axios.get("http://localhost:5000/blog/");
  // }, []);
  return (
    <div>
      <Navbar />
      <Image />
      <CategoryButton setUserData={setUserData} Data={Data}/>
      <div className="container">
        <div className="row">
          {userData.map((element) => (
            <div className="col-4" key={element.id}>
              <div className="card">
                <img
                  src={element.image}
                  className="card-img"
                  alt="user-profile"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <div className="read-edit-delete">
                    <button className="btn-more" onClick={switchPage}>
                      Read More
                    </button>
                    <Delete />
                    <button className="btn-edit">Edit</button>
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
