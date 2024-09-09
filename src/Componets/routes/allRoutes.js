import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import SettingPage from "../pages/setting";
import LoginPage from "../Auth/loginPage";


const AllRoutes = () => {
    return(
        <div>
<Routes>
    <Route path="/" element={<LoginPage />}></Route>
    <Route path="/home" element={<HomePage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="/setting" element={<SettingPage />}></Route>
</Routes>
        </div>
    )
}

export default AllRoutes;