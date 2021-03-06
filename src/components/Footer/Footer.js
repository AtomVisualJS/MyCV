import React, { Component } from "react";
import Icons from "./Icons/Icons";
import Ext from "./Ext/Ext";

import Sport from "./Sport/Sport";
class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div id="Qualites-Templates"></div>
          <div
            style={{
              backgroundImage:
                "url(https://static.vecteezy.com/ti/photos-gratuite/p1/1259659-surface-beton-gris-clair-gratuit-photo.jpg)",
            }}
          >
            <Sport />

            <Ext />

            <Icons />
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
