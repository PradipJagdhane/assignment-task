import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import LogoutButton from "../button/logout";
import { jwtDecode } from "jwt-decode";

const DialogBox = ({ open, onClose, handleLogout }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token){
      const decodedToken = jwtDecode(token);
      setUserInfo({
        name: decodedToken.name,
        email: decodedToken.email,
      })
    }
  },[])
  return (
    <Dialog
      open={open}
      onClose={onClose}
      style={{
        width: "300px",
        height: "260px",
        position: "relative",
        float: "right",
        top: 0,
        right: 0,
      }}
    >
      <DialogTitle>User: <b>{userInfo.name}</b></DialogTitle>
      <DialogContent>
        <p>{userInfo.email}</p>
     
            <LogoutButton handleLogout={handleLogout}/>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
