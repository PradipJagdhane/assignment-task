import React, { useState } from "react";
import "./signup.css";

const signKey = process.env.REACT_APP_SIGN_API_KEY;

const SignUp = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [role, setRole] = useState("");
  const [backendErrors, setBackendErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("role from form submitt", name);

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    // Reset password error if passwords match
    setPasswordError("");

    // Prepare data to send
    const signupData = {
      name,
      email: username,
      password,
      confirmPassword,
      role,
    };

    try {
      // Send API request
      const response = await fetch(`${signKey}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const result = await response.json();
      console.log(
        "result eeororo from server==========+++++++++++",
        result.errors
      );
      if (response.ok) {
        // Handle success response
        setSuccessMessage("User registered successfully!");
        setApiError(""); // Clear previous errors if any
        setBackendErrors({});
        // localStorage.setItem("userRole", role);
      } else {
        if (result.errors) {
          setBackendErrors(result.errors);
        } else {
          setApiError(result.error || "Signup failed");
        }
        // Handle error response from API
      }
    } catch (error) {
      setApiError("Server error. Please try again later.");
    }
  };

  return (
    <div className="signup-div">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div>
          <label>Select Role</label>{" "}
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">select</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
          </select>
          {backendErrors.role && (
            <p className="error">{backendErrors.role.msg}</p>
          )}
        </div>
        <div className="text_area">
          <label>
            Name
            <input
              type="text"
              className="text_input"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          {backendErrors.name && (
            <p className="error">{backendErrors.name.msg}</p>
          )}
        </div>
        <br />
        <div className="text_area">
          <label>
            Username (Email)
            <input
              type="email"
              className="text_input"
              placeholder="Enter email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          {backendErrors.email && (
            <p className="error">{backendErrors.email.msg}</p>
          )}
        </div>
        <br />
        <div className="text_area">
          <label>
            Password
            <input
              type="password"
              className="text_input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {backendErrors.password && (
            <p className="error">{backendErrors.password.msg}</p>
          )}
        </div>
        <br />
        <div className="text_area">
          <label>
            Confirm Password
            <input
              type="password"
              className="text_input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <br />
        {passwordError && <p className="error">{passwordError}</p>}
        {apiError && <p className="error">{apiError}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
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
