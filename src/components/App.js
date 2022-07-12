import "./app.scss";
import React from "react";
import { Navbar } from "./Navbar/index";
import { ThemeProvider } from "@mui/material/styles";
import { customtheme } from "../constants/general";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const App = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
