import { Avatar } from "@mui/material";
import React, { Component } from "react";
import "./formation.scss";


import ReactImg from "./assetsJs/react.png";
import ReduxImg from "./assetsJs/redux.png";

class Formation extends Component {
  render() {
    return (
      <div>
        <main
          style={{
            backgroundImage: `url(https://static.vecteezy.com/ti/vecteur-libre/p1/1857360-metal-texture-fond-vectoriel.jpg)`,
          }}
        >
          <div className="album py-3">
            <div className="container">
              <br />
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        &nbsp; &nbsp; <Avatar src={ReactImg} />
                        &nbsp; &nbsp; <Avatar src={ReduxImg} />
                      </div>
                      <br />

                      <h5 className="card-text">
                        <strong>Développeur Front-end</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        &nbsp; &nbsp; <Avatar src={ReactImg} />
                        &nbsp; &nbsp; <Avatar src={ReduxImg} />
                      </div>
                      <br />

                      <h5 className="card-text">
                        <strong>Développeur Front-end</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        &nbsp; &nbsp; <Avatar src={ReactImg} />
                        &nbsp; &nbsp; <Avatar src={ReduxImg} />
                      </div>
                      <br />

                      <h5 className="card-text">
                        <strong>Développeur Front-end</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        &nbsp; &nbsp; <Avatar src={ReactImg} />
                        &nbsp; &nbsp; <Avatar src={ReduxImg} />
                      </div>
                      <br />

                      <h5 className="card-text">
                        <strong>Développeur Front-end</strong>
                        <br />
                        <small>Université d'Avignon</small>
                      </h5>
                      <div className="d-flex justify-content-between align-items-center"></div>
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
