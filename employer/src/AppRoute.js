import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Employers from "./pages/Employers.js";

const AppRoute = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Employers />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
