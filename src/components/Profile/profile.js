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
          id="profile">
            <div
          style={{
            backgroundImage: "url(" + require("./space.jpg").default + ")",
            paddingTop: "50px",
          }}
        >
          <div>
            <div id="login-button" data-aos="zoom-in">
              <div>
                <img src={Moi} alt="" />
              </div>
            </div>
            <Terminal />
            <br /> <br />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Profile;
