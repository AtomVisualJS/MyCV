//import HorizontalLabelPositionBelowStepper from "components/Formation/HorizontalLabelPositionBelowStepper";
import Icons from "./Icons/Icons";
import React, { Component } from "react";
import Maps from "./Maps/Maps";
import Qualités from "../Mur/Mur";
class Footer extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://static.vecteezy.com/ti/photos-gratuite/p1/1259659-surface-beton-gris-clair-gratuit-photo.jpg)",
          }}
        >
          <Qualités />
          <br />
          <div className="container">
            <div className="row">
              <div className="c" data-aos="flip-left" 
              data-aos-duration="3000"
              style={{ width: "45%", margin: "2.5%" }}>
                <div className="card">
                  <div
                    className="card-header"
                    style={{
                      width: "100%",
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                      
                    }}
                  >
                    Centre d'intérêt :
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div className="card-text"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          
                        }}
                        >
                          📞 Communication  <br />
                          📈 Marketing <br />
                          💻 Informatique <br />
                          🤖 Data Science <br />
                          🧠 Neurosciences <br />
                          🚀 Astronomie <br />
                          🌳 Ecologie <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c" data-aos="flip-right" 
                data-aos-duration="3000"
              style={{ width: "45%", margin: "2.5%" }}>
                <div className="card">
                  <div
                    className="card-header"
                    style={{
                      fontSize: "1.5em",
                      fontWeight: "bold",
                      fontFamily: "Arial",
                      
                    }}
                  >
                    Activités :
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <div
                          className="card-text"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                        }}
                        >
                          🏍 Motocross <br />
                          🥊 Boxe <br />
                          📚 Lecture <br />
                          &nbsp; ♜&nbsp; Echecs <br />
                          🖥 Documentaire <br />
                          🎧 Musique <br />
                         🧑‍💻 Programmation <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Icons />
          <br />
          <Maps />
          <br />
        </div>
      </div>
    );
  }
}

export default Footer;
