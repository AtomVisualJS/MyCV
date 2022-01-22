import Terminal from "./Terminal/terminal";
import React, { Component } from "react";
import Moi from "./moi.png";
import "../Headers/css/header.css";
import "./profile.css";
import Qualites from "components/Mur/Qualités";



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
            <div
              id="login-button"
              data-aos="flip-left"
              data-aos-duration="2000"
            >
              <div>
                <img src={Moi} alt="" />
              </div>
            </div>
            <Terminal />
            <br />
            <Qualites />
         
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
