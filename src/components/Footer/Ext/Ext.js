import { Avatar } from "@mui/material";
import React, { Component } from "react";

import MotoImg from "./assets/moto.jpg";
import InfoImg from "./assets/info.jpg";
import EchecsImg from "./assets/echecs.jpg";
import ArteImg from "./assets/arte.jpg";
import BoxeImg from "./assets/boxe.jpg";

class Ext extends Component {
  render() {
    return (
      <div>
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignItems: "center",
            
            marginLeft: "2.5%",
            marginBottom: "5vh",
          }}
        >
          <div
            className="SportAvatar"
            style={{
              marginRight: "5%",
            }}
          >
            <Avatar src={MotoImg} sx={{ width: 66, height: 66 }} />
          </div>
          <div
            className="SportAvatar"
            style={{
              marginRight: "5%",
            }}
          >
            <Avatar src={EchecsImg} sx={{ width: 66, height: 66 }} />
          </div>
          <div
            className="SportAvatar"
            style={{
              marginRight: "5%",
            }}
          >
            <Avatar src={InfoImg} sx={{ width: 66, height: 66 }} />
          </div>
          <div
            className="SportAvatar"
            style={{
              marginRight: "5%",
            }}
          >
            <Avatar src={ArteImg} sx={{ width: 66, height: 66 }} />
          </div>
          <div
            className="SportAvatar"
            style={{
              marginRight: "5%",
            }}
          >
            <Avatar src={BoxeImg} sx={{ width: 66, height: 66 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Ext;
