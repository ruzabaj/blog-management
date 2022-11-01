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
  const [activeCategory, setActiveCategory]= useState([]);
  const [allBlog, setAllBlog]= useState([]);

  useEffect(()=>{
    axios.get(`http://api.allureinternational.com.np/api/get-all-blog`)
    .then((response)=>{
      setAllBlog(response.data.data)
      console.log(response.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get('http://api.allureinternational.com.np/api/get-all-active-category')
    .then((res)=>{
      setActiveCategory(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    axios.get('http://api.allureinternational.com.np/api/get-active-blog')
    .then((res)=>{
      setActiveBlog(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })
 
  },[])
  

  const navigate = useNavigate();

  const switchPage = (element) => {
    console.log("clicked readmore",element.id);
    let { categoryid, id, description, image, status, title}= element;
    localStorage.setItem("category_id",categoryid)
    localStorage.setItem("id",id)
    localStorage.setItem("description",description)
    localStorage.setItem("img",image)
    localStorage.setItem("status",status)
    localStorage.setItem("title",title)

    navigate("/blog");
    };
  
  return (
    <div>
      <Navbar />
      <Image />
      <CategoryButton setUserData={setUserData}  activeCategory={activeCategory}/>
      <Container userData={userData} next={switchPage} allBlog={allBlog}  activeBlog={activeBlog} setAllBlog={setAllBlog}/>
      <Footer />
    </div>
  );
};

export default Home;
