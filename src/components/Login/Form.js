import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
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
                {/* onChange={onChange}  name={name} onBlur={onBlur}  ref={ref} */}
                <input
                  type="text"
                  {...register("Username", {
                    required: true,
                    maxLength: 20,
                    minLength: 5,
                    onChange: (e) => console.log(e),
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
                </div>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  })}
                />
                {errors.password && (
                  <div className="error-message">
                    Pawword should have at least 8 character
                  </div>
                )}
              </div>
              <div className="btn">
                <div className="btn-create-acc">
                  <input type="submit" />
                  <button type="submit" className="create-account">
                    Create an Account
                  </button>
                </div>
                <div className="btn-signup-google">
                  {/* <button className="create-account">
                  </button> */}
                  {/* <GoogleSignUp/> */}
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

export default Form;
