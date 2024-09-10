import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import SettingPage from "../pages/setting";
import LoginPage from "../Auth/login/loginPage";
import NotFound from "../pages/notFound";
import bcgrd from "../../assets/bcgrd.jpg";
import ProtectedRoute from "./protectedRoute";
import SignUp from "../Auth/register/signUp";

const AllRoutes = () => {
  const location = useLocation();

  console.log(location.pathname);
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundImage = `url(${bcgrd})`;
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    } else {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundSize = "";
    }
  }, [location.pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/sign" element={<SignUp />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
