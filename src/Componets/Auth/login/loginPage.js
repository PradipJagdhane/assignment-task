import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.css";
import { login } from "../../../rtk/auth/authSlice";
import {  useNavigate } from "react-router-dom";
import SignUp from "../register/signUp";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    console.log("from validateEmail");
    return emailRegex.test(email);
  }

  function validatePassword(password) {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}[\]:;<>,.?~\\/-]{8,}$/;
    return passwordRegex.test(password);
  }

  function handleClick(e) {
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "email is required";
    } else if (!validateEmail(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (!validatePassword(password)) {
      validationErrors.password =
        "Password must be at least 8 characters, contain one uppercase letter, and one special character.";
    }

    if (Object.keys(validationErrors).length === 0) {
      setTimeout(() => {
        dispatch(login());
        navigate("/home");
      }, 1000);
    } else {
      setErrors(validationErrors);
    }
  }

  function btnclicked(e) {
    e.preventDefault();

    handleClick();
  }

  return (
    <div className={`main-div ${isLogin ? "slide-in" : "slide-out"}`}>
      {isLogin ? (
        <div>
          <h1>Sign In</h1>
          <div className="login-form">
            <form>
              <div className="text_area">
                {" "}
                <label>
                  Username
                  <input
                    type="text"
                    value={email}
                    className="text_input"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <br /> <br />
              <div className="text_area">
                {" "}
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    className="text_input"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                  />
                </label>
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <br />
              <br />
              <div></div>
              <button type="submit" className="btn" onClick={btnclicked}>
                Login
              </button>
            </form>
          </div>
          {/* 
        <Link to="/sign" className="sign">
          Don't have an account? <span style={{ color: "black" }}>Sign Up</span>
        </Link> */}
          <button className="toggle-btn" onClick={() => setIsLogin(false)}>
            Don't have an account? <span style={{color:"black"}}> Sign Up</span>
          </button>
        </div>
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default LoginPage;
