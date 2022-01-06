import React, { Component } from "react";
import "./terminal.css";

class Terminal extends Component {
  render() {
    return (
      <div>
      <br />
      <div id="terminalbody">  
        <div className="fakeMenu" style={{color:"black"}}>
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>          
        </div>
        <div className="fakeScreen">      
          <p className="line1">
           {">"}&nbsp;&ldquo;Née le 11 mai 1999&rdquo;
            <span className="cursor1">_</span>
          </p>
          <p className="line2">
            &nbsp;&nbsp;&ldquo;à Villeneuve sur Lot&rdquo;,
            <span className="cursor2">_</span>
          </p>
          <br />
          <p className="line3">
          {">"}&nbsp;&ldquo;Let's work together!&rdquo;&nbsp;
            <span className="cursor3">_</span>
          </p>
          <p className="line4">
            &nbsp;&nbsp;&ldquo;mmm&rdquo;&nbsp;
            <span className="cursor4">_</span>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default Terminal;
