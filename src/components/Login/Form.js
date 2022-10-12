import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checked, setChecked] = useState(true);

  const onSubmit = (data) => {
    // alert(JSON.stringify(data)),
    console.log(data);
  };
  const navigate= useNavigate();

  const handleClick=() =>{
    navigate('/home')
  };

  return (
    <div className="login-container">
      <div className="signup-right-container">
        <h2>Hello, Again!</h2>
        <p>
          Welcome to Creativity, please put your login credentials below to
          start using the app.
        </p>

        <div className="signup-form">
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div className="form-email">
                  <label>Email</label>
                </div>
                <input
                  type="text"
                  name="email"
                  {...register("Email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                  })}
                />
                {errors.Email && (
                  <div className="error-message">Use correct email format</div>
                )}
              </div>

              <div className="form-group">
                <div className="form-password">
                  <label>Password</label>
                  <a href="forgot-pw">Forgot password?</a>
                </div>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    pattern: /^[a-zA-Z0-9+_.-]/,
                  })}
                />
                {errors.password && (
                  <div className="error-message">
                    Pawword should have at least 8 character
                  </div>
                )}
              </div>
              <div className="btn">
                <input type="checkbox" onChange={() => setChecked(!checked)} />
                {console.log(checked,"value of check using usestate hook")}
                <label>Remember me</label>
                <div className="btn-create-acc">
                  <button type="submit" className="login-button" onClick={handleClick}>
                    Login
                  </button>
                </div>
              </div>
              <div className="link-login">
                <p>Not a member?</p>
                <span>
                  <Link to="/signup">Sign Up</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
