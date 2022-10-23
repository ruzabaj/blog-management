import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "../../sass/profile.scss";
import "../../sass/navbar.scss";


const Sidebar = () => {
  const [bright, setBright] =useState(false);
  const [theme, setTheme] =useState("light-theme");

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);

  const switchMode = () => {
    setBright(!bright)
    console.log("clicked",theme)
    theme === "light-theme"?      setTheme("dark-theme")    :     setTheme("light-theme")
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
                  <Link to="/create">Blog</Link>
                </li>
                <li className="nav-item-list">
                  <Link to="/category">Category</Link>
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
              {bright === false ?
              
              <FontAwesomeIcon icon={faMoon} onClick={switchMode} style={{color:"white", margin:"0px 10px"}}/>
              :

                <FontAwesomeIcon icon={faSun} onClick={switchMode} style={{color:"white", margin:"0px 10px"}}/>
            }
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
