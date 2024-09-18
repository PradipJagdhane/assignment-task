import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FaSmile } from "react-icons/fa";
import DialogBox from "./dialog";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
// import { jwtDecode } from "jwt-decode";
const Navbar = ({role}) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  console.log("role from props in Navbar::", role);



console.log("role from protected props>>>>>>+ ",role);
  // console.log("userRole", userRole);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem("userRole");
    setOpen(false);
  };
  return (
    <div className="container-fluid">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        {" "}
        {/* <a className="navbar-brand" href="/homew">
          Navbar
        </a> */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
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

           
{/*        <Link to="/home" className="nav-item nav-link">
              Dashboard
            </Link> */}
          {/* <p>Frim protected:{role.role}</p> */}
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

            {/* <Link to="/about" className="nav-item nav-link">
              About
            </Link>  */}

           {/* <Link to="/setting" className="nav-item nav-link">
              Setting
            // </Link> */}
            {/* <a className="nav-item nav-link disabled" href="">
               Disabled
             </a>  */}
          </div>
        </div>
        <div className="ml-auto">
          <FaSmile
            size={40}
            style={{ cursor: "pointer" }}
            onClick={handleClickOpen}
          />
        </div>
      </nav>

      <DialogBox
        open={open}
        onClose={handleClose}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default Navbar;
