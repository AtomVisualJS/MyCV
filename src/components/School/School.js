import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import "./parcours.scss";

class School extends Component {
  render() {
    return (
      <div>
        <div
          className="mainSchool"
          style={{
            backgroundImage: "url(" + require("./city.jpg").default + ")",
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
                    fontSize: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  <b> Mes Formations</b>
                </h2>
                <div className="tabsA">
                  <div className="tab">
                    <input type="checkbox" id="chck1" />
                    <label className="tab-label" htmlFor="chck1">
                      2019-2020 <b>Licence 3 </b> Information-Communication
                    </label>
                    <div className="tab-content">
                      <div className="row">
                        <Avatar
                          sx={{
                            width: "30px",
                            height: "30px",
                            marginLeft: "10px",
                          }}
                        />
                        &nbsp;&nbsp;
                        <div style={{ fontSize: "1em" }}>
                          Université de Toulon <br />
                          ..... 830dksndksnd
                        </div>
                      
                      </div>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                      2020-2021 <b>Licence 2 </b> Information-Communication
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                      2019-2020 <b>Licence 1 </b> Information-Communication
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                      2017-2019 <b>Licence 1 </b> &nbsp; Droit Public, Privé et
                      Pénal
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                      <div>2017</div>
                      <b style={{ marginLeft: "15px" }}>Baccalauréat</b>
                      Économique et Social
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, in!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default School;
