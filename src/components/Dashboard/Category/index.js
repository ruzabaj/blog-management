import React, { useState, useEffect } from "react";
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
  const [getCategory, setGetCategory] = useState([]);

  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/home");
  };

  const editPage = (element) => {
    let { id, category_name, status } = element;
    localStorage.setItem("id", id);
    localStorage.setItem("category name", category_name);
    localStorage.setItem("status", status);
    console.log("object", element);
    navigate("/edit-category");
  };

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

  const handleChange = (e) => {
    const newdata = { ...categoryDetail };
    newdata[e.target.id] = e.target.value;
    setCategoryDetail(newdata);
    console.log(newdata, "newdata");
  };

  const deleteCategory = (id) => {
    axios
      .delete(`http://api.allureinternational.com.np/api/delete-category/${id}`)
      .then((res) => {
        axios
          .get("http://api.allureinternational.com.np/api/get-all-category")
          .then((response) => {
            setGetCategory(response.data.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = () => {
    axios
      .post("http://api.allureinternational.com.np/api/add-new-category", {
        category_name: categoryDetail.categoryname,
        status: categoryDetail.categorystatus,
      })
      .then((res) => {
        axios
          .get(`http://api.allureinternational.com.np/api/get-all-category`)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error);
          });
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
      <div className="category-main">
        <div className="table-responsive-lg">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"> Category </th> <th scope="col"> Status </th>
                <th scope="col"> Delete Option </th>
                <th scope="col"> Edit Option </th>
              </tr>
            </thead>
            <tbody>
              {getCategory.map((element, index) => (
                <tr key={index}>
                  <th scope="row"> {element.category_name} </th>
                  <th> {element.status} </th>
                  <th>
                    <button
                      className="delete-category-btn"
                      onClick={() => deleteCategory(element.id)}
                    >
                      Delete Category
                    </button>
                  </th>
                  <th>
                    <button
                      className="delete-category-btn"
                      onClick={() => editPage(element)}
                    >
                      Edit Category
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form>
          <div className="category-center">
            <div className="category-name">
              <label className=""> Category name: </label>
              <input
                type="text"
                id="categoryname"
                value={categoryDetail.categoryname}
                onChange={handleChange}
                name="name"
              />
            </div>
            <div className="category-status">
              <label> Status: </label>
              <select
                name="status"
                id="categorystatus"
                value={categoryDetail.categorystatus}
                onChange={handleChange}
              >
                <option value="#"> </option>
                <option value="active"> Active </option>
                <option value="inactive"> Inactive </option>
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
    </div>
  );
};

export default Category;
