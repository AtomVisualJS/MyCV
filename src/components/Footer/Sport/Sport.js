import React, { Component } from "react";
import "./Sport.scss";


class Sport extends Component {
  render() {
    return (
      <div className="TemplateInterest"
          
      >
        <section className="section">
          <div className="grid">
            <div className="item">
              <div className="item__details">
                Marketing - Communication 
              </div>
            </div>
            <div className="item">
              <div className="item__details">
                Informatique - Data Science
              </div>
            </div>
            <div className="item">
            <div className="item__details">
              Neurosciences - Captologie 
            </div>
            </div>
            <div className="item">
            <div className="item__details"> 
              Astronomie
            </div>
            </div>
          </div>
         
        </section>
      </div>
    );
  }
}

export default Sport;
