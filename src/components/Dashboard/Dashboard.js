import React, {useState} from "react";
import Navbar from "./Navbar";
import Graph from "./Chart/GraphChart";
import "../../sass/card.scss";
import {User} from "../../Data"

const Dashboard = () => {
  // const [userData, setUserData] = useState({
  //   labels: ,
  //   datasets: []
  // })
  return (
    <div>
      <Navbar/>
      <div class="card">
        <img src="user-profile.png" className="card-img" alt="user-profile" />
        <div class="card-body">
          <h5 class="card-title">User Profile</h5>
          <p class="card-text">
            User Detail of Eployee
          </p>
          <button className="btn-user-profile">
            More
          </button>
        </div>
      </div>
      {/* <Graph chartData={User}/> */}
    </div>
  );
};

export default Dashboard;
