import React from "react";
import Sidebar from "./Navbar";
import "../../sass/card.scss";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <h2>You have entered in the dashboard</h2>
      <div class="card">
        <img src="user-profile.jpg" className="card-img" alt="user-profile" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn-user-profile">
            User Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
