import React, { Component } from "react";
import { Avatar } from "@mui/material";

import MotoImg from "./assets/moto.jpg";
import BoxeImg from "./assets/boxe.jpg";
import EchecsImg from "./assets/echecs.jpg";

class Interest extends Component {
  render() {
    return (
      <div>
        <div
          className="row"
          style={{
            marginTop: "2vh",
            marginLeft: "10vh",
            paddingRight: "10vh",
          }}
        >
          <Avatar
            
            src={MotoImg}
            style={{
              marginRight: "5vh",
            }}
            sx={{ width: 56, height: 56 }}
          />

          <Avatar
            src={BoxeImg}
            
            style={{
              marginRight: "5vh",
            }}
            sx={{ width: 56, height: 56 }}
          />

          <Avatar
            src={EchecsImg}
            
            style={{
              marginRight: "5vh",
            }}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
    );
  }
}

export default Interest;
