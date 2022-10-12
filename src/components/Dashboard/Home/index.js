import React, {useState} from "react";
import Navbar from "../Navbar";
import Footer from "../footer";
import "../../../sass/home.scss";

const Home = () => {
  // const [userData, setUserData] = useState({
  //   labels: ,
  //   datasets: []
  // })
  return (
    <div>
      <Navbar/>
      <div className="home-bg">
        <img src="blog.jpg" alt="home-bg" className="home-bg-img"/>
      </div>
      <div class="card">
        <img src="user-profile.png" className="card-img" alt="user-profile" />
        <div class="card-body">
          <h5 class="card-title">Title</h5>
          <p class="card-text">
            Blogs
          </p>
          <button className="btn-user-profile">
            More
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
