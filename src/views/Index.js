import React from "react";
import Aos from "aos";
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Profile from "components/Profile/profile";
//import Maps from "components/Maps/Maps";
import JS from "components/JS/JS";

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
      <Profile />
      <JS />
      
      
    </>
  );
}

export default Index;
