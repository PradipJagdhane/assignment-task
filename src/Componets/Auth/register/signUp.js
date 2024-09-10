import React from "react";
import "./signup.css";
const SignUp = ({ setIsLogin }) => {
  return (
    <div className="signup-div">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <div className="text_area">
          {" "}
          <label>
            Name
            <input
              type="text"
              className="text_input"
              placeholder="enter name"
            />
          </label>
        </div>
        <br />
        <br />
        <div className="text_area">
          {" "}
          <label>
            Username
            <input type="text" className="text_input" />
          </label>
        </div>
        <br /> <br />
        <div className="text_area">
          {" "}
          <label>
            Password:
            <input
              type="password"
              className="text_input"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </label>
        </div>
        <br />
        <br />
        <div></div>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <button className="toggle-btn" onClick={() => setIsLogin(true)}>
        Already have an account? <span>Sign In</span>
      </button>
    </div>
  );
};

export default SignUp;
