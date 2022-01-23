import * as React from "react";
import "./terminal.css";
import MathieuLogo from "./MathieuLogo.png";

const Terminal = () => {
  return (
    <div>
      <br />
      <div id="terminalbody">
        <div>
          <img
            src={MathieuLogo}
            alt=""
            style={{
              width: "200px",
            }}
          />{" "}
        </div>
        <div className="fakeMenu" style={{ color: "black" }}>
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p className="line1"> {">"} Mathieu Vialatte 22 ans</p>
          <p className="line2">
            <a
              href="mailto:atomvisualjs@gmail.com"
              style={{
                color: "#00ff00",
                fontFamily: "monospace",
              }}
            >
              {">"} atomvisualjs@gmail.com
            </a>
          </p>
          <p className="line3">{">"} Mon adresse: Toulon</p>
          <p className="line4">
             {">"}
            <span className="cursor4"> _</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
