import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Employee({ employeeDetail, goBack }) {
  return (
    <>
      <Header
        title={"Employee Detail - " + employeeDetail.name}
        image={employeeDetail.image}
      />
      <div className="m-10">
        {goBack && (
          <div className="my-5">
            ⟵
            <Link className="ml-3" to="/">
              Go Back
            </Link>
          </div>
        )}
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
              <li>
                <em>Age</em> - <strong>{employeeDetail.age}</strong>
              </li>
              <li>
                <em>Salary</em> - <strong>{employeeDetail.salary}</strong>
              </li>
              <li>
                <em>Designation</em> -{" "}
                <strong>{employeeDetail.Designation}</strong>
              </li>
              <li>
                <em>Department</em> -{" "}
                <strong>{employeeDetail.Department}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
