import axios from "axios";
import React, { useState, useEffect} from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import Image from "../Carousel/Image";
import CategoryButton from "./category";
import "../../../sass/home.scss";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Home = () => {
  const [activeBlog, setActiveBlog] = useState([]);
  const [activeCategory, setActiveCategory] = useState([]);
  const [allBlog, setAllBlog] = useState([]);
  const [filteredBlog, setFilteredBlog] = useState([]);
  const [filter, setfilter] = useState(false);

  useEffect(() => {
    axios
      .get(`http://api.allureinternational.com.np/api/get-all-blog`)
      .then((response) => {
        setAllBlog(response.data.data);
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://api.allureinternational.com.np/api/get-all-active-category")
      .then((res) => {
        setActiveCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://api.allureinternational.com.np/api/get-active-blog")
      .then((res) => {
        setActiveBlog(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filterBlog = (id) => {
    axios
      .get(`http://api.allureinternational.com.np/api/filter-blog/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setFilteredBlog(res.data.data);
        setfilter(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getAll = () => {
    setfilter(false);
    console.log(filter, "get all");
  };

  const navigate = useNavigate();

  const switchPage = (element) => {
    console.log("clicked readmore", element.id);
    let { categoryid, id, description, image, status, title } = element;
    localStorage.setItem("category_id", categoryid);
    localStorage.setItem("id", id);
    localStorage.setItem("description", description);
    localStorage.setItem("img", image);
    localStorage.setItem("status", status);
    localStorage.setItem("title", title);

    navigate("/blog");
  };

  return (
    <div>
      <Navbar />
      <Image />
      <button onClick={getAll}>Get All Blog</button>
      <CategoryButton activeCategory={activeCategory} filterBlog={filterBlog} />
      <Container
        next={switchPage}
        allBlog={allBlog}
        activeBlog={activeBlog}
        setAllBlog={setAllBlog}
        filter={filter}
        filteredBlog={filteredBlog}
      />
      <div className="all-blog-btn"></div>
      <Footer />
    </div>
  );
};

export default Home;
