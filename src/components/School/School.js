import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import "./parcours.scss";

/// Images

import UnivTln from "./ImgSchool/tln.png";
import UnivAvi from "./ImgSchool/avi.jpg";
import UnivBdx from "./ImgSchool/bdx.png";



class School extends Component {
  render() {
    return (
      <div>
        <div
          className="mainSchool"
          style={{
            backgroundImage: "url(" + require("./header.jpg").default + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            position: "relative",
            overflow: "hidden",
            padding: "0px",
            margin: "0px",
          }}
        >
          <div
            className="school-container"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              className="school-content"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                padding: "5%",
                
              }}
            >
              <div className="colA">
                <br />
                <h2
                  style={{
                    color: "white",
                    fontFamily: "Roboto",
                    fontSize: "3rem",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Mes Formations
                </h2>
                <div className="tabsA">
                  <div className="tab">
                    <input type="checkbox" id="chck1" />
                    <label className="tab-label" htmlFor="chck1">
                      2019-2020&nbsp;&nbsp; <b>Licence 3 </b>{" "}
                      &nbsp;&nbsp; Information-Communication &nbsp;
                    </label>
                    <div className="tab-content">
                      <div className="row">
                        <Avatar
                          src={UnivTln}
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Université de Toulon
                          <i className="fa fa-globe" aria-hidden="true"></i> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                      2020-2021&nbsp;&nbsp; <b>Licence 2 </b>{" "}
                      &nbsp;&nbsp; Information-Communication
                      &nbsp;</label>
                    <div className="tab-content">
                    <div className="row">
                        <Avatar
                          src={UnivAvi}
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Université d'Avignon
                          <i className="fa fa-globe" aria-hidden="true"></i> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                      2019-2020&nbsp;&nbsp;&nbsp; <b>Licence 1 </b>{" "}
                      &nbsp;&nbsp; Information-Communication
                      &nbsp;</label>
                    <div className="tab-content">
                    <div className="row">
                        <Avatar
                          src={UnivAvi}
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Université d'Avignon
                          <i className="fa fa-globe" aria-hidden="true"></i> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                      2017-2019 &nbsp;<b>Licence 1 </b> &nbsp; Droit Public,
                      Privé et Pénal
                      &nbsp;</label>
                    <div className="tab-content">
                    <div className="row">
                        <Avatar
                          src={UnivBdx}
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Université de Bordeaux
                          <i className="fa fa-globe" aria-hidden="true"></i> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                      2016-2017<b>Baccalauréat</b>
                      Économique et Social
                      &nbsp;</label>
                    <div className="tab-content">
                    <div className="row">
                        <Avatar
                          src={UnivTln}
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Lycée Maine de Biran
                          <i className="fa fa-globe" aria-hidden="true"></i> <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        
          <div id="profesionnel-title">
            <h2
              style={{
                color: "white",
                fontFamily: "Roboto",
                fontSize: "1.8rem",
                textAlign: "center",
              }}
            >
              <b>Expériences Professionnelles</b>
            </h2>
          </div>
         
          
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default School;
