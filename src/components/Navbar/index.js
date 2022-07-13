import "./index.scss";
import React from "react";
import { Button } from "@mui/material";
import { websiteName } from "../../constants/general";
import logo from "../../images/icon.svg";


export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="content">
        <img src={logo} alt={websiteName} className="element" />
        <div className="title element">{websiteName}</div>
      </div>
      <div className="content">
        <Button className="element how-to-use">How to Use</Button>
        <Button variant="contained" className="element">Contact Us</Button>
      </div>
    </div>
  );
};
