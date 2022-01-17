import React, { Component } from "react";
import "./Qualités.css";


class Qualités extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <h1>
         <b style={{color:"black"}}>Qualités :</b> 
            <div className="roller">
              <span id="rolltext">
                Curieux
                <br />
                Stratége
                <br />
                Créatif
                <br />
              </span>
              <span id="spare-time"></span>
              <br />
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Qualités;
