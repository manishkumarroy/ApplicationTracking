import React from "react";
import { NavLink } from "react-router-dom";
import cookie from "react-cookies";

const HeaderBar = () => {
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
        <NavLink className="nav-link" exect to="/login">
          <button
            className="btn btn-outline-light"
            onClick={() => cookie.remove("userLoggedIn")}
          >
            Logout
          </button>
        </NavLink>
      </div>
    </nav>
  );
};

export default HeaderBar;
