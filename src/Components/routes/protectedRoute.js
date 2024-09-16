import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem("token");
  //add new line for user role
  const userRole = localStorage.getItem("useRole");
  console.log("role from localstorage", userRole);
  console.log("update auth state in protected", isAuthenticated);
  console.log("token from localstorage", token);
  if (!isAuthenticated && !token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Navbar />
      {/* new line */}
      {userRole === "admin" && <Navigate to="/home" />}
      {userRole === "patient" && <Navigate to="/about" />}
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
