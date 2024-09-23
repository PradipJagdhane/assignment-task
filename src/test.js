import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";
import DialogBox from "./dialog";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const Navbar = ({ role }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  console.log("role from props in Navbar::", role);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    setOpen(false);
  };

  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="#">
          Navbar
        </Link>

        {/* Navbar Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Links for Admin */}
            {role === "admin" && (
              <>
                <Link to="/home" className="nav-item nav-link">
                  Dashboard
                </Link>

                <Link to="/setting" className="nav-item nav-link">
                  Setting
                </Link>
              </>
            )}

            {/* Links for Patient */}
            {role === "patient" && (
              <>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/setting" className="nav-item nav-link">
                  Setting
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Right-aligned Smile Icon */}
        <div className="ml-auto">
          <FaSmile
            size={40}
            style={{ cursor: "pointer", color: "rebeccapurple" }}
            onClick={handleClickOpen}
          />
        </div>
      </nav>

      {/* Dialog Box for Logout */}
      <DialogBox open={open} onClose={handleClose} handleLogout={handleLogout} />
    </div>
  );
};

export default Navbar;
