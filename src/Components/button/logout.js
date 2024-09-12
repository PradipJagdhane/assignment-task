import React from "react";
import { Button } from "@mui/material";


const LogoutButton = ({ handleLogout }) => {
  return (
    <>
   
      <Button
      variant="contained"
      color="secondary"
      onClick={handleLogout}
      style={{marginTop: "20px"}}
      >Logout</Button>
    </>
  );
};

export default LogoutButton;
