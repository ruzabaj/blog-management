import React from "react";
import "../../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="social-media">
          <h4 className="follow">Follow Us</h4>
          <div className="social-media-icon">
            <img src="insta.jpg" alt="insta" className="insta" />
            <img src="facebook.png" alt="facebook" className="facebook" />
            <img src="twitter.png" alt="twitter" className="twitter" />
          </div>
        </div>
        <div className="about">
          <h5 className="about">About</h5>
          <ul>
            <li>Company</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="blogs-link">
          <h5>Blog</h5>
          <ul>
            <li>Travel</li>
            <li>Travel</li>
            <li>Travel</li>
            <li>Travel</li>
            <li>Travel</li>
          </ul>
        </div>
      </div>
      <div className="horizontal" />
      <p className="copyright">© Copyright 2022</p>
    </div>
  );
};

export default Footer;
