import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Category = () => {
  const [categoryTitle, setCategoryTitle] = useState([]);
  const [activeCategory, setActiveCategory] = useState(false);
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
        console.log(res, "res from post category detail");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://api.allureinternational.com.np/api/get-all-category")
      .then((response) => {
        console.log(
          "inside array for accessing the title",
          response.data.data[0].category_name
        );
        setCategoryTitle(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const showactiveCategory = () => {
    // categoryTitle.filter
    if (categoryTitle.status === "active") {
      setActiveCategory(true);
    } else {
      setActiveCategory(false);
    }
  };
  const deleteCategory=(id)=>{
    axios.delete(`http://api.allureinternational.com.np/api/delete-category/${id}`)
    .then((res)=>{
      console.log(res)
      setCategoryDetail(res.data.data)
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
      <div class="table-responsive-lg">
        <h5>List of Categories</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Delete Option</th>
            </tr>
          </thead>
          <tbody>
            {categoryTitle.map((element, index) => (
              <tr key={index}>
                <th scope="row">{element.category_name}</th>
                <th>
                  <button className="delete-category-btn" onClick={()=>deleteCategory(element.id)}>
                    Delete Category
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
