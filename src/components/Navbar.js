import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
              to="/login"
            >
              Logout
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
              to="/contacts"
            >
              Contacts
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
              to="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "700",
              }}
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
