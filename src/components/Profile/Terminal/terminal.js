import * as React from "react";
import "./terminal.css";
import MathieuLogo from "./MathieuLogo.png";

const Terminal = () => {
  return (
    <div>
      <br />

      <div id="terminalbody">
        <div data-aos="zoom-in-left" data-duration="12000">
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
        <div class="fakeScreen">
          <p class="line1">
            {">"}&nbsp;&ldquo;Mathieu Vialatte 22 ans&rdquo;
            <span class="cursor1">_</span>
          </p> 
          <p class="line2">
            &nbsp;&nbsp;&ldquo;
            <a
              style={{
                color: "#00ff00",

                fontFamily: "monospace",
              }}
              href="/"
            >
              atomvisualjs@gmail.com
            </a>
            &rdquo;&nbsp;<span class="cursor3">_</span>
          </p>
          <p class="line3">
            &nbsp;&nbsp;&ldquo;Mon adresse: Toulon&rdquo;
            <span class="cursor2">_</span>
          </p>
         
          <p class="line4">
            {" "}
            {">"}
            <span class="cursor4">_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
