import React ,{useState, useEffect} from 'react';
import Navbar from '../Navbar';
import Data from "../Data";
import Comment from './comment';
import Footer from '../footer';
import "../../../sass/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
  // const [userData, setUserData] = useState(Data);
  const [id, setId] = useState();
  const [description, setDescription] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [categoryId, setCategoryId] = useState();
  const [status, setStatus] = useState();

  const[blog, setBlog]=useState();

  const navigate=useNavigate();
  const backtoHome=()=>{
    navigate("/home")
  }
useEffect(()=>{
setId(localStorage.getItem('id'))
setDescription(localStorage.getItem('description'))
setCategoryId(localStorage.getItem('category id'))
setImage(localStorage.getItem('img'))
setStatus(localStorage.getItem('status'))
setTitle(localStorage.getItem('title'))

// axios.get(`http://api.allureinternational.com.np/api/get-blog-details/${id}`)
// .then((res)=>{
// console.log(res)
// setBlog(res.data.data)
// })
},[])
  return (
    <div>
        <Navbar/>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={backtoHome} className="back"/>
        
        <div className='container'>
          <div className='row'>
          {/* {userData.map((element) => ( */}
            <div className='row'>
              <img
                      src={image}
                      className="card-img"
                      alt="user-profile"
                      />
              <h5 className="card-title">{id}</h5>
              <h5 className="card-title">{categoryId}</h5>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">{status}</p>
            </div>
          {/* ))} */}
          </div>
        </div>
        <Comment/>
        <Footer/>
    </div>
  )
}

export default Blog