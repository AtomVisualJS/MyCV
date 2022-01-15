import CompetencesJS from "./Competences/CompetencesJS";
import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./Competences/assetsJs/moi.png";
import "./profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <div id="profile">
          <CompetencesJS />
          <div id="login-button">
            <img src={Moi} alt=""></img>
          </div>
          <br></br>
          <Terminal />
          <CompetencesJS />
          <div style={{float:"right", backgroundImage:'url(https://static.vecteezy.com/ti/vecteur-libre/p1/1857360-metal-texture-fond-vectoriel.jpg)', borderRadius:'2px'}}>
            <div style={{fontSize:'3em'}}>&nbsp;&nbsp;&nbsp;&nbsp;Formations&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
