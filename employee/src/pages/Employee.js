import React from "react";

import Header from "../components/Header";

function Employee({ employeeDetail }) {
  return (
    <>
      <Header title={"Employee Detail - " + employeeDetail.name} />
      <div className="m-5">
        <div className="w-96 border rounded shadow p-3">
          <div className="flex items-center border-b-2 pb-3">
            <img
              src={employeeDetail.image}
              alt={employeeDetail.name}
              className="border rounded w-64"
            />
            <h1 className="text-4xl ml-4">{employeeDetail.name}</h1>
          </div>
          <div>
            <ul>
              <li>Age - {employeeDetail.age}</li>
              <li>Salary - {employeeDetail.salary}</li>
              <li>Designation - {employeeDetail.Designation}</li>
              <li>Department - {employeeDetail.Department}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
