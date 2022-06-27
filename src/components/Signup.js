import React from "react";
import "../sass/signup.scss";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="bg-img">
        <img src="background.jpg" alt="background" />
        <div className="quote"></div>
      </div>
      <div className="signup-right-container">
        <h3>Create an Account</h3>
        <p>Let's get started with your 30 day free trial.</p>
        <div className="signup-form">
          <form>
            <div className="form-group">
              <div className="form-username">
                <label>Username</label>
              </div>
              <input type="text" name="Username" />
            </div>
            <div className="form-group">
              <div className="form-email">
                <label>Email</label>
              </div>
              <input type="text" name="email" />
            </div>

            <div className="form-group">
              <div className="form-password">
                <label>Password</label>
              </div>
              <input type="password" name="password" />
            </div>
            <button type="submit">Create an Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
