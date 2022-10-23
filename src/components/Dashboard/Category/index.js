import React from 'react';
import "../../../sass/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const Category = () => {
    let navigate= useNavigate();
    const BacktoHme=()=>{
        navigate('/home');
    }
  return (
    <div>
        <h1>Category</h1>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={BacktoHme} className="back"/>
    </div>
  )
}

export default Category