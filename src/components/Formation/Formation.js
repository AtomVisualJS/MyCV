import { Avatar } from "@mui/material";
import React, { Component } from "react";
import "./formation.scss";

import Toulon from './assets/Toulon.png';
  

import Avignon from "./assets/Avignon.png";
import Bordeaux from "./assets/Bordeaux.jpg";
import Bergerac from "./assets/Bergerac.jpg";
import HorizontalLabelPositionBelowStepper from "./HorizontalLabelPositionBelowStepper";
class Formation extends Component {
  render() {
    return (
      <div>
        <main
         style={{backgroundImage: `url(https://static.vecteezy.com/ti/vecteur-libre/p1/1857360-metal-texture-fond-vectoriel.jpg)`}}
        >
          <div className="album py-3">
            <div className="container">
              <HorizontalLabelPositionBelowStepper />
              <br />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body"> 
                      <Avatar src={Toulon} />{" "}<small className="text-muted">2020-2021</small>
                      <h5 className="card-text">
                        <strong>Licence 3 Information-Communication</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body"> 
                      <Avatar src={Avignon} />{" "}<small className="text-muted">2020-2021</small>
                      <h5 className="card-text">
                        <strong>Licence 2 Information-Communication</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body"> 
                      <Avatar src={Avignon} />{" "}<small className="text-muted">2020-2021</small>
                      <h5 className="card-text">
                        <strong>Licence 1 Information-Communication</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body"> 
                      <Avatar src={Bordeaux} />{" "}<small className="text-muted">2020-2021</small>
                      <h5 className="card-text">
                        <strong>Licence 1 Droit </strong>
                        <br />
                        <small>Université de Bordeaux</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                       
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body"> 
                      <Avatar src={Bergerac} />{" "}<small className="text-muted">2020-2021</small>
                      <h5 className="card-text">
                        <strong>Bac Economique et Social</strong>
                        <br />
                        <small>Lycée Maine de Biran, Bergerac</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                       
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Formation;
