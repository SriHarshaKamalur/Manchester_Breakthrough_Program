import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header
      style={{
        position: 'fixed', // Fix the header at the top
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: '0.5rem 1rem', // Add padding for spacing
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Optional shadow for aesthetics
        zIndex: 1000, // Ensure it's above other content
        display: 'flex', // Flexbox for alignment
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space between logo and links
      }}
    >
      {/* Logo/Image Section */}
      <div>
        <img
          src="/src/assets/logo.png" // Adjust path to your image file
          alt="Breakthrough Manchester Logo"
          style={{ height: '50px', marginRight: '1rem' }} // Adjust size as needed
        />
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/events"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Events
        </NavLink>
        <NavLink
          to="/gallery"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Gallery
        </NavLink>
        <NavLink
          to="/newsletter"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Newsletter
        </NavLink>
        <NavLink
          to="/resources"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Resources
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'red' : '#007bff',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Student Profile
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
