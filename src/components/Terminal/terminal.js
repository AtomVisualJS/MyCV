import React, { Component } from "react";
import "./terminal.css";

class Terminal extends Component {
  render() {
    return (
      <div id="terminalbody">
        <div className="fakeMenu">
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
        
          <p className="line1">
           {">"} &#91;&nbsp;&ldquo;I'm a web developer.&rdquo;,
            <span className="cursor1">_</span>
          </p>
          <p className="line2">
            &nbsp;&nbsp;&ldquo;I'm a web designer.&rdquo;,
            <span className="cursor2">_</span>
          </p>
          <p className="line3">
            &nbsp;&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;&#93;
            <span className="cursor3">_</span>
          </p>
          <p className="line4">
            {">"}
            <span className="cursor4">_</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Terminal;
