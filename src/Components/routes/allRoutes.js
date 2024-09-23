import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/home/home";
import AboutPage from "../pages/about";
import SettingPage from "../pages/setting";
import LoginPage from "../Auth/login/loginPage";
import NotFound from "../pages/errorPages/notFound";
import bcgrd from "../../assets/bcgrd.jpg";
import SignUp from "../Auth/register/signUp";
import {
  ABOUT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_AUTH,
  SETTING_ROUTE,
  SIGN_ROUTE,
} from "./constants/routes";
import ProtectedRoute from "./protectedRoute";
import NotAuthorized from "../pages/errorPages/NotAuthorized";

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
      {/* 
      <Routes>
        <Route path={LOGIN_ROUTE} element={<LoginPage />}></Route>
        <Route path={SIGN_ROUTE} element={<SignUp />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path={HOME_ROUTE} element={<HomePage />}></Route>
          <Route path={ABOUT_ROUTE} element={<AboutPage />}></Route>
          <Route path={SETTING_ROUTE} element={<SettingPage />}></Route>
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}

      <Routes>
        <Route path={LOGIN_ROUTE} element={<LoginPage />}></Route>
        <Route path={SIGN_ROUTE} element={<SignUp />}></Route>

        {/*ADMIN-ROUTES*/}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path={HOME_ROUTE} element={<HomePage />}></Route>
          {/* <Route path={SETTING_ROUTE} element={<SettingPage />}></Route> */}
        </Route>

        {/*Patient Routes */}
        <Route element={<ProtectedRoute allowedRoles={["patient"]} />}>
          <Route path={ABOUT_ROUTE} element={<AboutPage />}></Route>

        </Route>

        <Route element={<ProtectedRoute allowedRoles />}>
          <Route path={SETTING_ROUTE} element={<SettingPage />}></Route>
        </Route>

        {/* Fallback for Unauthorized Access */}
        <Route path={NOT_AUTH} element={<NotAuthorized />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
