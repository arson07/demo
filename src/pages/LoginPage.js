import React, { Component } from "react";
import LoginBox from "../components/LoginBox";
import home_icon from "../img/homeicon.png";
import "../App.css";

const displayMessage = () => {
  console.log("Button is clicked!");
};

export class LoginPage extends Component {
  render() {
    return (
      <div className="login-container">
        <div style={{ padding: 20, alignSelf: "end" }}>
          <a
            href="#"
            style={{
              backgroundColor: "transparent",
              border: "1px solid #f8f8fa",
            }}
            onClick={displayMessage}
          >
            <img src={home_icon} alt="homeicon" className="home-icon" />
          </a>
        </div>
        <LoginBox />
      </div>
    );
  }
}

export default LoginPage;
