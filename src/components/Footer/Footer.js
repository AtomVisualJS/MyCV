//import HorizontalLabelPositionBelowStepper from "components/Formation/HorizontalLabelPositionBelowStepper";

import React, { Component } from "react";
import Icons from "./Icons/Icons";

import Qualites from "./Qualités/Qualités";
//import Activities from "./Activities/Activities";

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
          <div id="Qualites-Templates">
          <Qualites />
          </div>
          <div>
            <Icons />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
