import React,{useEffect} from "react";
import axios from "axios";

const Content = () => {
  useEffect(() => {
   axios.post('http://api.allureinternational.com.np/api/add-contact');
  }, [])
  return (
    <div className="card-content">
      <h2>Get In Touch</h2>
      <h6>We would like to hear from you</h6>
      <p className="information">
        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      </p>
      <div className="card-form">
        <div className="form-name">
          <div className="name">
            <input type="text" required />
            <div className="underline" />
            <label>Name</label>
          </div>
        </div>
        <div className="form-email">
          <div className="email">
            <input type="text" />
            <div className="underline" />
            <label>Email</label>
          </div>
        </div>
        <div className="form-subject">
          <div className="subject">
            <input type="text" />
            <div className="underline" />
            <label>subject</label>
          </div>
        </div>
        <div className="message">
          <textarea />
          <label>Message</label>
        </div>
      </div>
      <div className="btn-submit">
      <button type="submit" className="contact-submit">
        Submit
      </button>
      <button className="show-contact">
        Show contact
      </button>
      </div>
    </div>
  );
};

export default Content;
