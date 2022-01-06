import Terminal from "components/Terminal/terminal";
import React, { Component } from "react";
import Moi from "../../assets/img/moi.png";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div id="profile">
          <div id="login-button">
            <img src={Moi} alt=""></img>
          </div>
          <br></br>
          <Terminal />
        </div>
      </div>
    );
  }
}

export default Profile;
