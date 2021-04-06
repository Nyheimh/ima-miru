import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    <NavLink to="/create-show">
      Add Show
    </NavLink>
    <NavLink to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <div className="unauthOptions">
    <NavLink  to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink to="/sign-in">
      Sign In
    </NavLink>
  </div>
);
const alwaysOptions = (
  <div className="alwaysOptions">
    <NavLink to="/shows">
      All Shows
    </NavLink>
  </div>
);

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="appName" to="/">
          Ima Miru
        </NavLink>
        <div className="links">
          <div className="authorized">
            {user && <div className="userWelcome">Welcome, {user.username}</div>}
              <div className="navOptions">
                {alwaysOptions}
                {user ? authenticatedOptions : unauthenticatedOptions}
              </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
