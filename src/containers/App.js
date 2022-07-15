import "./app.scss";
import React, { useState } from "react";
import { Navbar } from "./Navbar/index";
import { ThemeProvider } from "@mui/material/styles";
import { customtheme } from "../constants/general";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { configureStore } from "../store";
import { Provider } from "react-redux";
import CollegeList from "./CollegesList";
import Toast from "./Toast";

const store = configureStore();

export const App = () => {
  const [howToUseClick, setHowToUseClick] = useState(false);
  
  
  return (
    <ThemeProvider theme={customtheme}>
      <Provider store={store}>
        <Toast />
        <Router>
          <Navbar setHowToUseClick={setHowToUseClick} />
          <div className="main-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    howToUseClick={howToUseClick}
                    setHowToUseClick={setHowToUseClick}
                  />
                }
              />
              <Route path="/colleges_list" element={<CollegeList />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
};
