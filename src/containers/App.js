import "./app.scss";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar/index";
import { ThemeProvider } from "@mui/material/styles";
import { customtheme } from "../constants/general";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useDispatch } from "react-redux";
import CollegeList from "./Lists/CollegesList";
import Toast from "./Toast";
import SeatMatrix from "./Lists/SeatMatrix";
import { fetchInstituteType, fetchYear } from "../store/actions/form";
import Ranks from "./Lists/Opening&ClosingRank";

export const App = () => {
  const [howToUseClick, setHowToUseClick] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchYear());
    dispatch(fetchInstituteType())
  }, []);

  return (
    <ThemeProvider theme={customtheme}>
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
            <Route path="/seat_matrix" element={<SeatMatrix />} />
            <Route path="/rank" element={<Ranks />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};
