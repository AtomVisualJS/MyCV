import React from "react";
import Aos from "aos";
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import CompetencesJS from "components/Competences/CompetencesJS";
import Terminal from "components/Terminal/terminal";


Aos.init();
function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      
      <Terminal />

      <CompetencesJS />
    </>
  );
}

export default Index;
