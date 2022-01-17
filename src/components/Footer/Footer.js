//import HorizontalLabelPositionBelowStepper from "components/Formation/HorizontalLabelPositionBelowStepper";
import Icons from "./Icons/Icons";
import React, { Component } from "react";
import Maps from "./Maps/Maps";
import Qualités from "./Qualités/Qualités";
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
          <br /> <br />
          <Qualités />
          <br />
          <div className="container">
            <div className="row" style={{}}>
              <div className="c" style={{ width: "45%", margin: "2.5%" }}>
                <div className="card">
                  <div className="card-header">Centre d'intérêt :</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card-text">
                          Communication <br />
                          Marketing <br />
                          Informatique <br />
                          Data Science <br />
                          Neurosciences <br />
                          🚀 Astronomie <br />
                          Ecologie <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c" style={{ width: "45%", margin: "2.5%" }}>
                <div className="card">
                  <div className="card-header">Activités :</div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card-text">
                          Motocross <br />
                          🥊 Boxe <br />
                          Lecture <br />
                          Echecs <br />
                          Documentaire <br />
                          Musique <br />
                          🖥 Programmation <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">Valeurs : </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">Echecs Motocross</div>
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
