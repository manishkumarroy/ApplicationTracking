import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Hiring App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/">
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/panelist">
                Panelist
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link" exact to="/jobs">
                Openings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contactus">
                Status Tracking
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="nav-link" exect to="/Login">
          <button className="btn btn-outline-light">Logout</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
