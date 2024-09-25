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

  // Define routes with necessary parameters
  const routes = [
    { path: LOGIN_ROUTE, element: <LoginPage />, isProtected: false },
    { path: SIGN_ROUTE, element: <SignUp />, isProtected: false },
    { path: HOME_ROUTE, element: <HomePage />, isProtected: true, roles: ["admin"] },
    { path: ABOUT_ROUTE, element: <AboutPage />, isProtected: true, roles: ["patient"] },
    { path: SETTING_ROUTE, element: <SettingPage />, isProtected: true },
    { path: NOT_AUTH, element: <NotAuthorized />, isProtected: false },
  ];

  return (
    <div>
      <Routes>
        {/* Dynamically map routes */}
        {routes.map(({ path, element, isProtected, roles }) => (
          isProtected ? (
            <Route
              key={path}
              element={<ProtectedRoute allowedRoles={roles} />}
            >
              <Route path={path} element={element}></Route>
            </Route>
          ) : (
            <Route key={path} path={path} element={element}></Route>
          )
        ))}

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
