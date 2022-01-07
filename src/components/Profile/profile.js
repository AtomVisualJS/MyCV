import CompetencesJS from "./Competences/CompetencesJS";
import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./Competences/assetsJs/moi.png";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div id="profile"><CompetencesJS />
          <div id="login-button">
            <img src={Moi} alt=""></img>
          </div>
          <br></br>
          <Terminal />
          <CompetencesJS />
        </div>
      </div>
    );
  }
}

export default Profile;
