import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import LogoutButton from "../button/logout";

const DialogBox = ({ open, onClose, handleLogout }) => {
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
      <DialogTitle>User: <b>Pradip</b></DialogTitle>
      <DialogContent>
        <p>pradip12@gmail.com</p>
     
            <LogoutButton handleLogout={handleLogout}/>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
