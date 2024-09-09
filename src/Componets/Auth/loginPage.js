import React, { useState } from "react";
import "./login.css";
const LoginPage = () => {


    const[user, setUser] = useState("");
    const[pass, setPass] = useState("");



function handleClick(){
    console.log("login button clicked");

}

  return (
    <div className="main-div">
      <h1>Login Page</h1>

      <div className="login-form">
        <div className="text_area">
          {" "}
          <label>
            Username
            <input type="text" value={user} className="text_input" onChange={(e) => setUser(e.target.value)}/>
          </label>
        </div>
        <br /> <br />
        <div className="text_area">
          {" "}
          <label>
            Password:
            <input type="password" value={pass} className="text_input" onChange={(e) => setPass(e.target.value)}/>
          </label>
        </div>
        <br />
        <br />
        <div>
            
        </div>
        <button type="submit" className="btn" onClick={handleClick}>
          Login
        </button>
      </div>
      <a href="www.google.com" className="sign">
        Sign up
      </a>
    </div>
  );
};

export default LoginPage;
