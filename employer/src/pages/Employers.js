import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

import data from "../data";

function Employers(props) {
  return (
    <>
      <Header title="All Employees" />
      <main className="bg-slate-200">
        <div className="container mx-auto p-5">
          <div class="flex flex-wrap">
            {data.map((employer) => (
              <div
                className="sm:w-full md:w-64 m-3 border rounded p-3 shadow-lg hover:shadow"
                key={employer.id}
              >
                <Link to={"/employee/" + employer.id}>
                  <div class="flex items-center">
                    <img
                      src={employer.image}
                      width="75px"
                      alt=""
                      className="rounded-full"
                    />
                    <div className="ml-5">
                      <h2 className="font-bold">{employer.name}</h2>
                      <p>
                        {employer.Designation} - {employer.Department}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default Employers;
