import React from "react";

import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// logout
const logout = () => {
  // destroy the cookie
  cookies.remove("TOKEN", { path: "/" });
  // redirect user to the landing page
  window.location.href = "/";
};

export default function Navbar() {
  
  const token = cookies.get("TOKEN");
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: 25 + "%" }}
            src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"
          ></img>
        </NavLink>
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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/post">
                Records
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create">
                Create Record
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Account
              </NavLink>
            </li>
            <li className="nav-item">
              {token ? (
                <Button type="submit" variant="danger" onClick={() => logout()}>
                  Logout
                </Button>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
