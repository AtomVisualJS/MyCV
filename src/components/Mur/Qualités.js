import React, { Component } from "react";

import "./mur.css";

class Qualites extends Component {
  render() {
    return (
      <div>
        <div className="mainQualites">
          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "5vh",
            }}
          >
            Qualités :
            <div
              className="roller"
              style={{
                marginTop: "1vh",
                height: "125px",
              }}
            >
              <span
                id="rolltext"
                style={{
                  color: "white",
                  fontSize: "5vh",
                  fontWeight: "bold",
                }}
              >
                <i style={{ color: "lightgreen", marginTop: "4vh" }}>
                  Curieux 🔍
                </i>
                <br />
                <i style={{ color: "lightblue" }}>Stratège 📈</i>
                <br />
                <i style={{ color: "orange" }}>Créatif 🎨 </i>
              </span>
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Qualites;
