import React from "react";
import "./css/header.css";
// reactstrap components
import { Container } from "reactstrap";
import { Avatar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// Images
import JsImage from "../Competencesdev/assetsJs/js.png";
import NodeImage from "../Competencesdev/assetsJs/node.png";
import PyhtonImage from "../Competencesdev/assetsJs/python.png";
// core components

function IndexHeader() {
  const [openHeadJs, setOpenHeadJs] = React.useState(false);

  const handleTooltipCloseHeadJs = () => {
    setOpenHeadJs(false);
  };

  const handleTooltipOpenHeadJs = () => {
    setOpenHeadJs(true);
  };

  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/login-image.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="wrapper">
              <div className="title">
                <br /> <br />
                <div
                  className="row"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="Header_Avatar"
                    
                  >
                    <ClickAwayListener onClickAway={handleTooltipCloseHeadJs}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseHeadJs}
                        open={openHeadJs}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Javascript"
                      >
                        <Button onClick={handleTooltipOpenHeadJs}>
                          <Avatar
                            src={JsImage}
                            sx={{ width: 56, height: 56 }}
                          />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                  </div>
                  <div className="Header_Avatar">
                    <Avatar
                      data-aos="zoom-in"
                      data-aos-duration="3000"
                      src={NodeImage}
                      sx={{ width: 56, height: 56 }}
                    />
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    className="Header_Avatar"
                  >
                    <Avatar src={PyhtonImage} sx={{ width: 56, height: 56 }} />
                  </div>
                </div>
                <br /> <br />
                <h3
                  className="typing-demo"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Développeur <b style={{ color: "yellow" }}> Javascript </b>
                </h3>
                <h3
                  className="typing-demo"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Développeur <b style={{ color: "lightblue" }}> Python</b>
                </h3>
                <h3
                  className="typing-demo"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  Consultant <b style={{ color: "lightgreen" }}> Marketing</b>
                </h3>
              </div>

              <div className="fog-low">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
              <div className="fog-low right">
                <img
                  alt="..."
                  src={require("assets/img/fog-low.png").default}
                />
              </div>
            </div>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage:
              "url(" + require("assets/img/clouds.png").default + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;
