import "./app.scss";
import React from "react";
import { Navbar } from "./Navbar/index";
import { ThemeProvider } from "@mui/material/styles";
import { customtheme } from "../constants/general";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { configureStore } from "../store";
import { Provider } from "react-redux";

const store = configureStore();

export const App = () => {
  return (
    <ThemeProvider theme={customtheme}>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
