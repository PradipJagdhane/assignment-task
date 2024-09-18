import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem("token");
  const [role, setUserRole] = useState("");
    
    useEffect(() => {    
      if(token){
        const decodedToken = jwtDecode(token);
        setUserRole(decodedToken.role);
        console.log("decode token role from protected>>>", decodedToken.role);
      }
    
    },[token]);




  //add new line for user role
  console.log("update auth state in protected", isAuthenticated);
  console.log("decode token from navbar role---45",role);

  if (!isAuthenticated && !token) {
    return <Navigate to="/" />;
  }



  return (
    <>
      <Navbar role={role}/>
      
      {/* {role === "admin" && <Navigate to="/home" replace/>}
      {role === "patient" && <Navigate to="/about" replace/>} */}
      
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
