
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/space.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <div className="typing-demo">
                Développeur
                
                <b
                  style={{
                    fontSize: "1em",
                    color: "yellow",
                    fontWeight: "bold",

                  }}
                > Javascript </b>
                </div>
              <br />
              <div className="typing-demo">
                Développeur
               
                <b
                  style={{
                    fontSize: "1em",
                    color: "lightblue",
                    fontWeight: "bold",
                  }}
                > Python</b>
                
                </div>
              <br />
              <div className="typing-demo">
               Consultant  
                <b
                  style={{
                    fontSize: "1em",
                    color: "orange",
                    fontWeight: "bold",
                  }}
                > Marketing </b>
               
                
                
                </div>
              <br /> <br />
              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
