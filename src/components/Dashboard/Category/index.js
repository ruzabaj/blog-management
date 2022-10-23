import React, { useState } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
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

  const handleChange = (e) => {
    const newdata = { ...categoryDetail };
    newdata[e.target.id] = e.target.value;
    setCategoryDetail(newdata);
    console.log(newdata, "newdata");
  };

  const handleSubmit = () => {
    axios
      .post("http://api.allureinternational.com.np/api/add-new-category", {
        category_name: categoryDetail.categoryname,
        status: categoryDetail.categorystatus,
      })
      .then((res) => {
        console.log(res,"res from then");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Navbar />
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={BacktoHme}
        className="back"
      />
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
            <select name="status"  id="categorystatus" onChange={handleChange}>
              <option value="active">Active</option>
              <option value="inactive" >Inactive</option>
            </select>
          </div>
        </div>
          <div className="btn-submit">
            <button type="submit" className="category-btn" onSubmit={handleSubmit}             >
              Submit
            </button>
          </div>
      </form>
    </div>
  );
};

export default Category;
