import React, { useState } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Category = () => {
  const [categoryDetail, setCategoryDetail] = useState({
    categoryname: "",
    categorystatus: "",
  });

  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/home");
  };

  const handleChange=(e)=>{
    const newdata={...categoryDetail};
    newdata[e.target.id]=e.target.value;
    setCategoryDetail(newdata);
    console.log(newdata, "newdata");

  }

  const handleSubmit=()=>{
    axios.post('http://api.allureinternational.com.np/api/add-new-category',{
      category_name: categoryDetail.categoryname,
      status: categoryDetail.categorystatus
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
      <Navbar />
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={BacktoHme}
        className="back"
      />
      <form onSubmit={handleSubmit}>
        <div className="dropdown-center">
          <div className="category-name">
            <label>Category name:</label>
            <input type="text" id="categoryname" onChange={handleChange} name="name" />
          </div>
          <div className="category-status">
            <label>Category status:</label>
            <input type="text" id="categorystatus" onChange={handleChange} name="name" />
          </div>
          <div className="category-btn">
            <button type="submit"  onSubmit={handleSubmit}>Submit</button>
          </div>
          <div className="category-status">
           
           
          </div>
        </div>
      </form>
    </div>
  );
};

export default Category;
