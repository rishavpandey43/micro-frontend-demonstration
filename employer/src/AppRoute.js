import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Employers from "./pages/Employers.js";

import data from "./data";

const Employee = React.lazy(() => import("employee/Employee"));

const randomIndex = Math.floor(Math.random() * (9 - 0 + 1)) + 0;

const AppRoute = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Employers />
        </Route>
        <Route exact path="/employee-detail">
          <Suspense fallback={<div>Loading...</div>}>
            <Employee goBack employeeDetail={data[randomIndex]} />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoute;
