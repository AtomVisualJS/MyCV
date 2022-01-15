import React from "react";
import "./css/header.css";
// reactstrap components
import { Container } from "reactstrap";
import { Avatar } from "@mui/material";

// core components

function IndexSection() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/antoine-barres.jpg").default + ")",
        }}
      >
        <div className="filter" />
      <div >
          <Container>
            <div>
                <div className="row" >
               <Avatar /><Avatar /></div> 
               <h1>sqsqs</h1> 
               <h1>sqsqs</h1> 
               <h1>sqsqs</h1> 
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

export default IndexSection;