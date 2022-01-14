import React from "react";


// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import Profile from "components/Profile/profile";
import Formation from "components/Formation/Formation";
import Activity from "components/Activity/Activity";
//import Formation from "components/Formation/Formation";
///import Maps from "components/Maps/Maps";

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
      <Formation />
      <Activity />
    </>
  );
}

export default Index;
