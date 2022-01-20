import React, { Component } from "react";
import "./Qualités.css";

class Qualités extends Component {
  render() {
    return (
      <div>
        <div
          className="contain"
          style={{
            backgroundImage: "url(" + require("./black.png").default + ")",
          }}
        >
          <div className="main">
            <h1
              style={{
                marginTop: "3%",
                marginBottom: "2%",
                width: "350px",
                fontFamily: "Roboto",
                fontSize: "2rem",
                height: "auto",
              }}
            >
              <div className="roller" style={{}}>
                <span id="rolltext">
                  <div
                    style={{
                      color: "lightgreen",
                      
                      paddingTop: "5px",
                    }}
                  >
                    Stratège
                  </div>

                  <div
                    style={{
                      color: "lightblue",
                      
                      paddingTop: "5px",
                      marginBottom: "5px",
                    }}
                  >
                    Curieux
                  </div>

                  <div
                    style={{
                      color: "red",
                      marginTop: "5px",
                     marginBottom: "5px",
                    }}
                  >
                    {" "}
                    Créatif
                  </div>
                 
                </span>
              </div>
            </h1>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Qualités;
