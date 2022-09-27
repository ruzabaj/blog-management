import React from "react";
import Sidebar from "./Navbar";
import "../../sass/card.scss";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
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
    </div>
  );
};

export default Dashboard;
