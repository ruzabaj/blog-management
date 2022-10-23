import React from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const Category = () => {
  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/home");
  };
  
  return (
    <div>
      <Navbar/>
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={BacktoHme}
        className="back"
        />
      <div>
        <label>Category name:</label>
        <input type="text" id="categoryName" name="name"/>
      </div>
      <div class="dropdown-center">
      <div className="category-name">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Category Name
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#active">
                Active
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#inactive">
                Inactive
              </a>
            </li>
          </ul>
        </div>
        <div className="category-status">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#active">
                Active
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#inactive">
                Inactive
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
