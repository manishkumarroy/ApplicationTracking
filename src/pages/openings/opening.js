import React from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Card } from "react-bootstrap";
import "./opening.css";

const Openings = () => {
  return (
    <>
      <div className=" container">
        <div className="heading">
          <h1>Openings</h1>
        </div>
        <div className="card">
          <div className="card_header">
            IT
            <h2>React Developer (junior)</h2>
          </div>
          <div className="card_body">
            <img style={{ width: 50 }} src="business.png" alt="business bag" />

            <Link className="btn btn-primary btn-dark " exact to="/description">
              Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Openings;
