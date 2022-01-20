import React, { Component } from "react";
import "./Qualités.css";

class Qualités extends Component {
  render() {
    return (
      <div>
        <div className="contain">
          <div className="main">
            <h1>
              <b
                style={{
                  color: "black",
                  fontFamily: "Roboto",
                }}
              >
                {" "}
                Qualités :
              </b>
              <div className="roller">
                <span id="rolltext">
                  <b style={{ color: "blue" }}>Curieux</b>
                  <br />
                  <b style={{ color: "green" }}>Stratège</b>
                  <br />
                  <b style={{ color: "orange" }}> Créatif</b>
                  <br />
                </span>
                <span id="spare-time"></span>
                <br />
              </div>
            </h1>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Qualités;
