import React from "react";
import "../../sass/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src="logo.jpg" alt="logo" className="logo" />
        <div className="about">
          <h5 >About</h5>
          <ul>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="blogs-link">
          <h5>Blog</h5>
          <ul>
            <li>Latest Post</li>
            <li>Popular Post</li>
            <li>Buy Theme</li>
          </ul>
        </div>
      </div>

      <div className="horizontal" />
<div className="footer-content-down">
<div className="social-media">
        <div className="social-media-icon">
          <img src="insta.jpg" alt="insta" className="insta" />
          <img src="facebook.png" alt="facebook" className="facebook" />
          <img src="twitter.png" alt="twitter" className="twitter" />
        </div>
      </div>
      <p className="copyright">© Copyright 2022</p>
      <p className="copyright-message">
        With a commitment to quality content for our community.
      </p>
</div>
      
    </div>
  );
};

export default Footer;
