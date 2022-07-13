import "./index.scss";
import React from "react";
import { Button } from "@mui/material";
import { websiteName } from "../../constants/general";
import logo from "../../images/icon.svg";
import { useNavigate } from "react-router-dom";


export const Navbar = ({setHowToUseClick}) => {
  const navigate = useNavigate()

  const howUseClick = () => {
    setHowToUseClick(true)
    navigate("/")
  }

  return (
    <div className="navbar-container">
      <div className="content">
        <img src={logo} alt={websiteName} className="element" />
        <div className="title element">{websiteName}</div>
      </div>
      <div className="content">
        <Button onClick={howUseClick} className="element how-to-use">How to Use</Button>
        <Button variant="contained" className="element">Contact Us</Button>
      </div>
    </div>
  );
};
