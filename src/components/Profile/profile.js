//import CompetencesJS from "./Competences/CompetencesJS";
import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./moi.png";
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
