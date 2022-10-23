import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import Image from "../Carousel/Image";
import CategoryButton from "./category";
import "../../../sass/home.scss";
import Data from "../Data";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Home = () => {
  const [userData, setUserData] = useState(Data);

  const navigate = useNavigate();

  const switchPage = () => {
    console.log("clicked readmore");
    navigate("/blog");
  };
  
  return (
    <div>
      <Navbar />
      <Image />
      <CategoryButton setUserData={setUserData} Data={Data}/>
      <Container userData={userData} next={switchPage}/>
      <Footer />
    </div>
  );
};

export default Home;
