import axios from 'axios';
import React,{useState, useEffect} from 'react'
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
  const [activeBlog, setActiveBlog]= useState([]);
  const [allBlog, setAllBlog]= useState([]);

  useEffect(()=>{
    axios.get(`http://api.allureinternational.com.np/api/get-all-blog`)
    .then((response)=>{
      setAllBlog(response.data.data)
    })
    axios.get('http://api.allureinternational.com.np/api/get-all-active-category')
    .then((res)=>{
      setActiveBlog(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  

  const navigate = useNavigate();

  const switchPage = () => {
    console.log("clicked readmore");
    navigate("/blog");
  };
  
  return (
    <div>
      <Navbar />
      <Image />
      <CategoryButton setUserData={setUserData} Data={Data} activeBlog={activeBlog}/>
      <Container userData={userData} next={switchPage} allBlog={allBlog}/>
      <Footer />
    </div>
  );
};

export default Home;
