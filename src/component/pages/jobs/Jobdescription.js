import React from "react";
import { NavLink } from "react-router-dom";

const Jobdescription = () => {
  return (
    <div>
      <h1>Job Description</h1>
      <NavLink className="nav-link" exect to="/apply">
        <button className="btn btn-outline-dark">Apply</button>
      </NavLink>
    </div>
  );
};

export default Jobdescription;
