import React from "react";
import "../sass/signup.scss";

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="bg-img">
        <img src="background.jpg" alt="background" />
        <div className="quote">
            Explore your creativity!
        </div>
      </div>
      <div className="signup-right-container">
        <h3>Create an Account</h3>
        <p>Let's get started with your 30 day free trial.</p>
        <div className="signup-form">
          <div className="form">
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
              <div className="btn">
                <div className="btn-create-acc">
                  <button type="submit" className="create-account">
                    Create an Account
                  </button>
                </div>
                <div className="btn-signup-google">
                  <button type="submit" className="create-account">
                    Sign Up with Google
                  </button>
                </div>
              </div>
              <div className="link-login">
                <p>Already have an account?</p>
                <span>
                  <a href="log-in">Log in</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
