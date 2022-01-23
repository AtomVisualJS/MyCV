import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./moi.png";
import "../Headers/css/header.css";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url(" + require("assets/img/antoine-barres.jpg").default + ")",
            backgroundSize: "cover",
          }}
        >
          <div>
            <br /> <br /> <br />
            <div id="login-button">
              <img src={Moi} alt="" />
            </div>
            <Terminal />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
