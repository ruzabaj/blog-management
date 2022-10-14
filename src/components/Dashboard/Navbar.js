import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../../sass/profile.scss";
import "../../sass/navbar.scss";


const Sidebar = () => {
  const [bright, setBright] =useState(false);

  const brightMode = () => {
    setBright(!bright)
  };
  return (
    <div>
      <nav>
        <div className="nav-width">
          <div className="container-nav">
            <img src="logo.jpg" alt="logo" className="logo" />
            <div className="navbar-item">
              <ul className="nav-item">
                <li className="nav-item-list">
                  <Link to="/home">Home</Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/create">Create</Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="profile-logout">
              <Link to="/">
                <img src="login-profile.png" alt="login" className="profile" />
              </Link>
              <button className="toggle">
                <FontAwesomeIcon icon={faSun} onClick={brightMode} />
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
