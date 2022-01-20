import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Profile from "components/Profile/profile";
import Competencesdev from "components/Competencesdev/Competencesdev";
//import Parcours from "components/Parcours/Parcours";
//import Footer from "components/Footer/Footer";
import School from "components/School/School";
import Qualités from "components/Footer/Qualités/Qualités";





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
      <Profile />
      <Competencesdev />
      <School />
      <Qualités />
    
    </>
  );
}

export default Index;
