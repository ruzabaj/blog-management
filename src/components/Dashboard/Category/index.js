import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Category = () => {
  const [getCategory, setGetCategory] = useState([]);

  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/home");
  };
  const editPage=(element)=>{
    let {id, category_name, status}=element;
    localStorage.setItem('id', id);
    localStorage.setItem('category name', category_name);
    localStorage.setItem('status', status);
    console.log("object", element)
    navigate('/edit-category')
  }

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

 
  const deleteCategory =  (id) => {
     axios.delete(
        `http://api.allureinternational.com.np/api/delete-category/${id}`
      )
      .then((res)=>{
      axios.get('http://api.allureinternational.com.np/api/get-all-category')
        .then((response)=>{
          setGetCategory(response.data.data)
        })
      })
    .catch ((err)=>{
      console.log(err);
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
   
      <div class="table-responsive-lg">
        <h5>List of Categories</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Delete Option</th>
              <th scope="col">Edit Option</th>
            </tr>
          </thead>
          <tbody>
            {getCategory.map((element, index) => (
              <tr key={index}>
                <th scope="row">{element.category_name}</th>
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
                    onClick={()=>editPage(element)}
                  >
                    Edit Category
                  </button>
              <div>{element.id}
              </div>
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
