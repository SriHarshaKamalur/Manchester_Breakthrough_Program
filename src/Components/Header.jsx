import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img
          src="/src/assets/logo.png"
          alt="Breakthrough Manchester Logo"
          className="logo"
        />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          About
        </NavLink>
        <div className="dropdown">
          <NavLink to="#" className="nav-link">
            CB Student Links
          </NavLink>
          <div className="dropdown-content">
            <NavLink
              to="/monthly-checkin"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Monthly Check-In
            </NavLink>
            <NavLink
              to="/6c-points"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              6C Points
            </NavLink>
            <NavLink
              to="/tutoring-support"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Tutoring Support
            </NavLink>
            <NavLink
              to="/suggestion-box"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Suggestion Box
            </NavLink>
            <NavLink
              to="/breakthrough-documents"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Breakthrough Documents
            </NavLink>
          </div>
        </div>
        <NavLink
          to="/events"
          className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
        >
          Events
        </NavLink>
        {/* Modified Resources Dropdown */}
        <div className="dropdown">
          <NavLink to="#" className="nav-link">
            Resources
          </NavLink>
          <div className="dropdown-content">
            <NavLink
              to="/summer-programs"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Summer Programs
            </NavLink>
            <NavLink
              to="/preparing-for-college"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Preparing for College
            </NavLink>
            <NavLink
              to="/applying-to-college"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Applying to College
            </NavLink>
            <NavLink
              to="/paying-for-college"
              className={({ isActive }) => (isActive ? "dropdown-item active" : "dropdown-item")}
            >
              Paying for College
            </NavLink>
            </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
