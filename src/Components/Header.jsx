import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img
          src="/src/assets/logo.png"
          alt="Breakthrough Manchester Logo"
          className="logo"
        />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <NavLink to="/" exact className="nav-link" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/events" className="nav-link" activeClassName="active">
          Events
        </NavLink>
        <NavLink to="/resources" className="nav-link" activeClassName="active">
          Resources
        </NavLink>
        <NavLink to="/gallery" className="nav-link" activeClassName="active">
          Gallery
        </NavLink>
        <NavLink to="/newsletter" className="nav-link" activeClassName="active">
          Newsletter
        </NavLink>
        <NavLink to="/profile" className="nav-link" activeClassName="active">
          Student Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
