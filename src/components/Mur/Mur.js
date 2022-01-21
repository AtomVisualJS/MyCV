import React, { Component } from "react";
import Brique from "./brique.jpg";
import "./mur.css";

class Qualites extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${Brique})`,
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="mainQualites">
              <h1 style={{ width: "100%" }}>
                <div
                  className="roller"
                  style={{
                    marginTop: "5vh",
                    height: "30vh",
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
                    <b> Curieux</b>
                    <br />
                    <b style={{ color: "lightblue" }}>Stratège</b>
                    <br />
                    <b style={{ color: "orange" }}>Créatif</b>
                    <br />
                  </span>
                  <span id="spare-time"></span>
                  <br />
                </div>
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qualites;
