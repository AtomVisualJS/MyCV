import React, { Component } from "react";
import "./contact.css"
class Contact extends Component {
  render() {
    return (
        <div style={{backgroundColor:"white"}}>
      <div id="contactBox">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div>
            <a href="# /">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default Contact;
