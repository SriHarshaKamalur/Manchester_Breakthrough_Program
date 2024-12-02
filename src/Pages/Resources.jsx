// Home.jsx
/*import React from 'react';

const Home = () => {
  return <h1>Welcome to the Resources Page</h1>;
};

export default Home;*/
import React from "react";
import { NavLink } from "react-router-dom";
import "./Resources.css"; // Add styling if needed

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>College and Career Resources</h1>

      <section>
        <h2>Explore the Resources Below:</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/summer-programs">Summer Programs</NavLink>
            </li>
            <li>
              <NavLink to="/preparing-for-college">Preparing for College</NavLink>
            </li>
            <li>
              <NavLink to="/applying-to-college">Applying to College</NavLink>
            </li>
            <li>
              <NavLink to="/paying-for-college">Paying for College</NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Resources;
