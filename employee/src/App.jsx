import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import data from "./data";

import Employee from "./pages/Employee";

const randomIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

const App = () => <Employee employeeDetail={data[randomIndex]} />;
ReactDOM.render(<App />, document.getElementById("app"));
