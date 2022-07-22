import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../logotransparent.png";

export default function Header({ user, setUser, handleLogout }) {
  return (
    <div className="header">
      <div className="navcontainer">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <div>
          <nav
            className="topnav"
            style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}
          >
            <img className="navlogo" src={logo2} alt="logo" />
            {user ? (
              <>
                <NavLink to="/logout" onClick={handleLogout}>
                  Logout
                </NavLink>
                <NavLink to="/budgets">My Account</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/signup">Sign-Up</NavLink>
                <NavLink to="/login">Login</NavLink>
              </>
            )}
            <NavLink to="/">Home</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
