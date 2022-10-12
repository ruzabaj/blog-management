import React from "react";
import { Link } from "react-router-dom";
import "../../sass/profile.scss";
import "../../sass/navbar.scss";

const Sidebar = () => {
  return (
    <div>
      <nav>
        <div class="container-nav">
          <img src="logo.jpg" alt="logo" className="logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-item">
              <ul className="nav-item">
                <li className="nav-item-list">
                  <Link to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/create">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
          </div>
            <div className="">
              <Link to="/">
                <img src="login-profile.png" alt="login" className="profile" />
              </Link>
            </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
