import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./moi.png";
import "../Headers/css/header.css";
import "./profile.css";
import Space from "./space.jpg";

class Profile extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${Space})`,
            backgroundSize: "cover",
          }}
        >
         
            <div><br /> <br /> <br />
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
    );
  }
}

export default Profile;
