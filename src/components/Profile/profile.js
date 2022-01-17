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
          <br /> <br />
          <div id="login-button" data-aos="flip-down">
            <div>
              <img src={Moi} alt="" />
            </div>
           
            
          </div> 
          <br></br>
          <Terminal />
          <br /> <br />
        </div>
      </div>
    );
  }
}

export default Profile;
