import HorizontalLabelPositionBelowStepper from "components/Formation/HorizontalLabelPositionBelowStepper";
import Icons from "components/Icons/Icons";
import React, { Component } from "react";

class Bois extends Component {
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
          <HorizontalLabelPositionBelowStepper />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    Centre d'intérêt
                  </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                               Echecs Motocross
                                </div>
                                </div>
                                </div>
                </div>
              </div>
            </div>
          </div>
          <Icons  />
        </div>
      </div>
    );
  }
}

export default Bois;
