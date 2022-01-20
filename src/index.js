
/////
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";

import Aos from "aos";
import 'aos/dist/aos.css';
import Carte from "views/Carte";
Aos.init();
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
      <Route path="/maps" element = {<Carte />} />
        
      
      
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
