import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const EditCategory = () => {
  const [getCategory, setGetCategory] = useState([]);
  const [id, setId]=useState();
  const[categoryName, setCategoryName]=useState();
  const[status,setStatus]=useState();
    
  const handleSubmit =  (e) => {
    e.preventDefault();
  axios
    .post(`http://api.allureinternational.com.np/api/category-update/${id}`,
     {
      category_name: categoryName,
      status:status,
      _method:"patch"
    }
    )
    .then((res)=>{
        console.log(res)
    })
};
  
  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/create-category");
  };

  useEffect(()=>{
      setId(localStorage.getItem('id'))
      setCategoryName(localStorage.getItem('category name'));
      setStatus(localStorage.getItem('status'));
    },[])

  useEffect(() => {
    axios
      .get("http://api.allureinternational.com.np/api/get-all-category")
      .then((response) => {
        setGetCategory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={BacktoHme}
        className="back"
      />
      <form >
        <div className="category-center">
          <div className="category-name">
            <label className="">Category name:</label>
            <input
              type="text"
              id="categoryname"
              value={categoryName}
            onChange={(e)=>setCategoryName(e.target.value)}
              name="name"
            />
          </div>
          <div className="category-status">
            <label>Status:</label>
            <select name="status" 
            id="status" 
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
            >
              <option value="#" ></option>
              <option value="active"  >Active</option>
              <option value="inactive" >Inactive</option>
            </select>
          </div>
        </div>
        <div className="btn-submit">
          <button
            type="submit"
            className="category-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
