import React ,{useState} from 'react';
import Navbar from '../Navbar';
import Data from "../Data";
import Footer from '../footer';
import "../../../sass/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [userData, setUserData] = useState(Data);
  const navigate=useNavigate();
  const backtoHome=()=>{
    navigate("/home")
  }

  return (
    <div>
        <Navbar/>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={backtoHome} className="back"/>
        <div className='container'>
          <div className='row'>
          {userData.map((element) => (
            <div className='row'>
              <img
                      src={element.image}
                      className="card-img"
                      alt="user-profile"
                      />
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
            </div>
          ))}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog