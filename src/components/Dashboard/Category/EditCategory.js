import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const EditCategory = ({getCategory, setGetCategory}) => {
  const [categoryDetail, setCategoryDetail] = useState({
    categoryname: "",
    categorystatus: "",
  });

  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/create-category");
  };

  const handleChange = (e) => {
    const newdata = { ...categoryDetail };
    newdata[e.target.id] = e.target.value;
    setCategoryDetail(newdata);
    console.log(newdata, "newdata");
  };

  const handleSubmit = async() => {
  axios.post('http://api.allureinternational.com.np/api/add-new-category',{
    category_name: categoryDetail.categoryname,
    status: categoryDetail.categorystatus
  })
  .then((res)=>{
    axios.get('http://api.allureinternational.com.np/api/get-all-category')
    .then((response)=>{
      setGetCategory(response.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  };

  useEffect(() => {
    console.log(getCategory,"get")
    axios
      .get("http://api.allureinternational.com.np/api/get-all-category")
      .then((response) => {
        console.log('tag', response.data.data)
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
       {/* <pre>{JSON.stringify(props, undefined,2)}</pre> */}
      <form type="submit" onSubmit={handleSubmit}>
        <div className="category-center">
          <div className="category-name">
            <label className="">Category name:</label>
            <input
              type="text"
              id="categoryname"
              value={categoryDetail.categoryname}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="category-status">
            <label>Status:</label>
            <select name="status" id="categorystatus" onChange={handleChange}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
        <div className="btn-submit">
          <button
            type="submit"
            className="category-btn"
            onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {/* activeCategory&& */}
      
    </div>
  );
};

export default EditCategory;
