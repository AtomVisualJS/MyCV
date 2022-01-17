import React, { Component } from "react";

import Exp from "./Exp";

import "./Middle.css";

///import HorizontalNonLinearStepper from "./HorizontalNonLinearStepper";

class Middle extends Component {
  render() {
    return (
      <div>
        <div id="middle">
          <Exp />
        </div>
      </div>
    );
  }
}

export default Middle;
