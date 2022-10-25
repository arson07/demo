import React from "react";
import "../App.css";
import cloud_logo from "../img/clouds-icon-13-256.png";

export default function loginBox() {
  return (
    <div className="login-box">
      <div className="login-box-header">
        <h2 style={{ marginTop: -5, marginBottom: 5 }}>Welcome Back !</h2>
        <p style={{ margin: 0, color: "#B1B7EA" }}>
          Sign in to continue to BoostRMS.
        </p>
      </div>

      <div className="logo-circle">
        <img src={cloud_logo} style={{ height: 50 }} />
      </div>

      <div className="login-box-usercredentials">
        <h4 className="login-labels">Email / Username</h4>

        <input
          className="login-inputs"
          placeholder="Enter email/username"
          type="username"
        />
        <h4 className="login-labels">Password</h4>
        <input
          className="login-inputs"
          placeholder="Enter Password"
          type="Password"
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 35,
          paddingLeft: 40,
          paddingRight: 40,
        }}
      >
        <div style={{ display: "flex" }}>
          <input type="checkbox" />
          <h4 style={{ color: "#5B626B", fontSize: 12, paddingLeft: 5 }}>
            Remember me
          </h4>
        </div>
        <button className="login-button">Log In</button>
      </div>

      <div
        style={{
          fontWeight: 600,
          color: "#707BD7",
          paddingLeft: 48,
          paddingTop: 20,
        }}
      >
        <a style={{ textDecoration: "none" }} href="#">
          Forgot your Password?
        </a>
      </div>
    </div>
  );
}
