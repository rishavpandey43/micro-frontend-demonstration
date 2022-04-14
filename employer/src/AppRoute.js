import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Employers from "./pages/Employers.js";

import Employee from "employee/Employee";

import data from "./data";
const randomIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

const AppRoute = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Employers />} />
        <Route
          exact
          path="/employee/:id"
          element={<Employee goBack employeeDetail={data[randomIndex]} />}
        />
      </Routes>
    </Router>
  );
};

export default AppRoute;
