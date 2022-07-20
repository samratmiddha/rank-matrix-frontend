import "./index.scss";
import React from "react";
import { Button } from "@mui/material";
import { websiteName } from "../../constants/general";
import logo from "../../images/icon.svg";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = ({ setHowToUseClick }) => {
  const navigate = useNavigate();

  const howUseClick = () => {
    setHowToUseClick(true);
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <Link to="/" className="go-back">
        <div className="content">
          <img src={logo} alt={websiteName} className="element" />
          <div className="title element">{websiteName}</div>
        </div>
      </Link>
      <div className="content">
        <Button variant="contained"onClick={howUseClick} className="element">
          How to Use
        </Button>
      </div>
    </div>
  );
};
