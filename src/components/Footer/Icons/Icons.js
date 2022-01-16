import React, { Component } from "react";
import "./Icons.css";

class Icons extends Component {
  render() {
    return (
      <div>`<br />
        <div id="icons-body">
          <div className="icons-container">
            <a href="mailto: atomvisualjs@gmail.com">
              <i className="fa fa-envelope" id="apple"></i>
            </a>
            <a href="https://www.linkedin.com/in/mathieu-vialatte-529465229/">
              <i className="fa fa-linkedin-square" id="twitter"></i>
            </a>
            <a href="https://github.com/AtomVisualJS">
            <i className="fa fa-github-square github" id="github"></i>
            </a>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Icons;
