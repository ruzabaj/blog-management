import React from "react";
import "../sass/signup.scss";
import GoogleSignUp from "./Googlelogin";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../sass/icon.scss";

const Signup = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleClick = () => {
    setPasswordEye(!passwordEye);
  };

  const handleClickConfirm = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: onchange,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  // same as useState as it preserve value doesn't rerender 
  const emailChanges = useRef({});

  const passwordRef = useRef({});
  passwordRef.current = watch('password');
  const confirm = watch(['password','confirmPassword']);
  console.log(confirm);
  
  return (
    <div className="signup-container">
      <div className="bg-img">
        <img src="background.jpg" alt="background" />
        <div className="quote">Explore your Creativity!</div>
      </div>
      <div className="signup-right-container">
        <h1>Create an Account</h1>
        <p>Let's get started with your 30 day free trial.</p>

        <div className="signup-form">
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <div className="form-username">
                  <label>Username</label>
                </div>
                <input
                  type="text"
                  {...register("Username", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                  })}
                />
                
                {errors.Username && (
                  <div className="error-message">This field is required</div>
                )}
              </div>

              <div className="form-group">
                <div className="form-email">
                  <label>Email</label>
                </div>
                <input
                  type="text"
                  id=" emailChanges "
                  ref={emailChanges}
                  {...register("email", {
                    required: true,
                    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                  })}
                />
                {errors.email && (
                  <div className="error-message">Use correct email format</div>
                )}
              </div>

              <div className="form-group">
                <div className="form-password">
                  <label>Password</label>
                </div>
                <input
                type={(passwordEye===false)?"text":"password"}
                {...register('password')}
                />
                {passwordEye === false ? (
                  <div className="password-seen">
                    <FontAwesomeIcon icon={faEye} onClick={handleClick} />
                  </div>
                ) : (
                  <div className="password-unseen">
                    <FontAwesomeIcon icon={faEyeSlash} onClick={handleClick} />
                  </div>
                )}
                {errors.password && (
                  <div className="error-message">
                    Password should have at least 8 character
                  </div>
                )}
              </div>

              <div className="form-group">
                <div className="form-password">
                  <label>Confirm Password</label>
                </div>
                <input
                  type={(confirmPasswordEye===false)?"text":"password"}
                  {...register("confirmPassword",
                  {validate: value => value === passwordRef.current || "password doesnot match"}
                  )}
                />
                {confirmPasswordEye === false ? (
                  <div className="password-seen">
                    <FontAwesomeIcon icon={faEye} onClick={handleClickConfirm} />
                  </div>
                ) : (
                  <div className="password-unseen">
                    <FontAwesomeIcon icon={faEyeSlash} onClick={handleClickConfirm} />
                  </div>
                )}
                {errors.confirmPassword && (
                  <div className="error-message">Password does not match.</div>
                )}
              </div>

              <div className="btn">
                <div className="btn-create-acc">
                  <button type="submit" className="create-account">
                    Create an Account
                  </button>
                </div>
                <div className="btn-signup-google">
                  <GoogleSignUp />
                </div>
              </div>
              <div className="link-login">
                <p>Already have an account?</p>
                <span>
                  <Link to="/login">Log in</Link>
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
