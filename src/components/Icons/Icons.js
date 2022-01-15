import React, { Component } from "react";
import "./Icons.css";

class Icons extends Component {
  render() {
    return (
      <div>
        <div id="icons-body">
          <div className="icons-container">
            <a href="https://www.facebook.com/">
              <i className="fa fa-envelope" id="apple"></i>
            </a>

            <i className="fa fa-linkedin-square" id="twitter"></i>
            <i className="fa fa-github-square github" id="github"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Icons;
