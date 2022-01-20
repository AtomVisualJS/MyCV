import { Avatar } from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// Images
import AcierImg from "./acier.jpg";

import JsImg from "./assetsJs/js.png";
import ReactImg from "./assetsJs/react.png";
import ReduxImg from "./assetsJs/redux.jpg";
import CssImg from "./assetsJs/css.png";
import SassImg from "./assetsJs/sass.png";
//import HtmlImg from "./assetsJs/html.png";
import ReactNativeImg from "./assetsJs/react-nativ.png";

import NodeImg from "./assetsJs/node.png";
import ExpressImg from "./assetsJs/express.jpg";
import MongoImg from "./assetsJs/mongo.png";
import NpmImg from "./assetsJs/npm.png";
import DockerImg from "./assetsJs/docker.png";

import PythonImg from "./assetsJs/python.png";
import JupyterImg from "./assetsJs/jupyter.png";
import PandasImg from "./assetsJs/pandas.png";
import MatplotlibImg from "./assetsJs/matplotlib.png";

const Competencesdev = () => {
  // Javascript
  const [openJs, setOpenJs] = React.useState(false);

  const handleTooltipCloseJs = () => {
    setOpenJs(false);
  };

  const handleTooltipOpenJs = () => {
    setOpenJs(true);
  };

  // React
  const [openReact, setOpenReact] = React.useState(false);

  const handleTooltipCloseReact = () => {
    setOpenReact(false);
  };

  const handleTooltipOpenReact = () => {
    setOpenReact(true);
  };

  /// Redux
  const [openRedux, setOpenRedux] = React.useState(false);

  const handleTooltipCloseRedux = () => {
    setOpenRedux(false);
  };

  const handleTooltipOpenRedux = () => {
    setOpenRedux(true);
  };

  // Css
  const [openCss, setOpenCss] = React.useState(false);

  const handleTooltipCloseCss = () => {
    setOpenCss(false);
  };

  const handleTooltipOpenCss = () => {
    setOpenCss(true);
  };

  // Sass
  const [openSass, setOpenSass] = React.useState(false);

  const handleTooltipCloseSass = () => {
    setOpenSass(false);
  };

  const handleTooltipOpenSass = () => {
    setOpenSass(true);
  };



  // React Native
  const [openReactNative, setOpenReactNative] = React.useState(false);

  const handleTooltipCloseReactNative = () => {
    setOpenReactNative(false);
  };

  const handleTooltipOpenReactNative = () => {
    setOpenReactNative(true);
  };

  /// Node
  const [openNode, setOpenNode] = React.useState(false);

  const handleTooltipCloseNode = () => {
    setOpenNode(false);
  };

  const handleTooltipOpenNode = () => {
    setOpenNode(true);
  };

  /// Express
  const [openExpress, setOpenExpress] = React.useState(false);

  const handleTooltipCloseExpress = () => {
    setOpenExpress(false);
  };

  const handleTooltipOpenExpress = () => {
    setOpenExpress(true);
  };

  /// Mongo
  const [openMongo, setOpenMongo] = React.useState(false);

  const handleTooltipCloseMongo = () => {
    setOpenMongo(false);
  };

  const handleTooltipOpenMongo = () => {
    setOpenMongo(true);
  };

  /// Npm
  const [openNpm, setOpenNpm] = React.useState(false);

  const handleTooltipCloseNpm = () => {
    setOpenNpm(false);
  };

  const handleTooltipOpenNpm = () => {
    setOpenNpm(true);
  };

  /// Docker
  const [openDocker, setOpenDocker] = React.useState(false);

  const handleTooltipCloseDocker = () => {
    setOpenDocker(false);
  };

  const handleTooltipOpenDocker = () => {
    setOpenDocker(true);
  };

  /// Python
  const [openPython, setOpenPython] = React.useState(false);

  const handleTooltipClosePython = () => {
    setOpenPython(false);
  };

  const handleTooltipOpenPython = () => {
    setOpenPython(true);
  };

  /// Jupyter
  const [openJupyter, setOpenJupyter] = React.useState(false);

  const handleTooltipCloseJupyter = () => {
    setOpenJupyter(false);
  };

  const handleTooltipOpenJupyter = () => {
    setOpenJupyter(true);
  };

  /// Pandas
  const [openPandas, setOpenPandas] = React.useState(false);

  const handleTooltipClosePandas = () => {
    setOpenPandas(false);
  };

  const handleTooltipOpenPandas = () => {
    setOpenPandas(true);
  };

  /// Matplotlib
  const [openMatplotlib, setOpenMatplotlib] = React.useState(false);

  const handleTooltipCloseMatplotlib = () => {
    setOpenMatplotlib(false);
  };

  const handleTooltipOpenMatplotlib = () => {
    setOpenMatplotlib(true);
  };

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(${AcierImg})`,
        }}
      >
        <h2
          style={{
            textAlign: "center",
            paddingTop: "3%",
            paddingBottom: "2.5%",
            fontWeight: "bold",
          
          }}
        >
          Compétences
        </h2>
        <div className="album"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "95%",
            margin: "auto",
          }}
        >
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5
                    className="card-text"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    <strong>Développeur Front-end</strong>
                    <br />
                    <small></small>
                  </h5>
                  <div className="row">
                    <ClickAwayListener onClickAway={handleTooltipCloseJs}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseJs}
                        open={openJs}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Javascript"
                      >
                        <Button onClick={handleTooltipOpenJs}>
                          {" "}
                          <Avatar src={JsImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseReact}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseReact}
                        open={openReact}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="React JS"
                      >
                        <Button onClick={handleTooltipOpenReact}>
                          {" "}
                          <Avatar src={ReactImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseRedux}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseRedux}
                        open={openRedux}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Redux JS"
                      >
                        <Button onClick={handleTooltipOpenRedux}>
                          {" "}
                          <Avatar src={ReduxImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseCss}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseCss}
                        open={openCss}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Css"
                      >
                        <Button onClick={handleTooltipOpenCss}>
                          {" "}
                          <Avatar src={CssImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseSass}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseSass}
                        open={openSass}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Sass"
                      >
                        <Button onClick={handleTooltipOpenSass}>
                          {" "}
                          <Avatar src={SassImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    

                    <ClickAwayListener
                      onClickAway={handleTooltipCloseReactNative}
                    >
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseReactNative}
                        open={openReactNative}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="React Native"
                      >
                        <Button onClick={handleTooltipOpenReactNative}>
                          {" "}
                          <Avatar src={ReactNativeImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                  </div>
                </div>
              </div>
            </div>

            <div className="col" data-aos="flip-up">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5
                    className="card-text"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    <strong>Développeur Back-end</strong>
                    <br />
                  </h5>
                  <div className="row">
                    <ClickAwayListener onClickAway={handleTooltipCloseNode}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseNode}
                        open={openNode}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Node JS"
                      >
                        <Button onClick={handleTooltipOpenNode}>
                          {" "}
                          <Avatar src={NodeImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseMongo}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseMongo}
                        open={openMongo}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Mongo DB"
                      >
                        <Button onClick={handleTooltipOpenMongo}>
                          {" "}
                          <Avatar src={MongoImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                    <ClickAwayListener onClickAway={handleTooltipCloseExpress}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseExpress}
                        open={openExpress}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Express JS"
                      >
                        <Button onClick={handleTooltipOpenExpress}>
                          {" "}
                          <Avatar src={ExpressImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseNpm}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseNpm}
                        open={openNpm}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Npm"
                      >
                        <Button onClick={handleTooltipOpenNpm}>
                          {" "}
                          <Avatar src={NpmImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseDocker}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseDocker}
                        open={openDocker}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Docker"
                      >
                        <Button onClick={handleTooltipOpenDocker}>
                          {" "}
                          <Avatar src={DockerImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                  </div>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>

            <div className="col" data-aos="zoom-in">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5
                    className="card-text"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    <strong>Analyse de données</strong>

                    <small style={{ float: "right" }}>qslslsls</small>
                  </h5>
                  <div className="row">
                    <ClickAwayListener onClickAway={handleTooltipClosePython}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipClosePython}
                        open={openPython}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Python"
                      >
                        <Button onClick={handleTooltipOpenPython}>
                          {" "}
                          <Avatar src={PythonImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipCloseJupyter}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseJupyter}
                        open={openJupyter}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Jupyter Notebook"
                      >
                        <Button onClick={handleTooltipOpenJupyter}>
                          {" "}
                          <Avatar src={JupyterImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener onClickAway={handleTooltipClosePandas}>
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipClosePandas}
                        open={openPandas}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Pandas"
                      >
                        <Button onClick={handleTooltipOpenPandas}>
                          {" "}
                          <Avatar src={PandasImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>

                    <ClickAwayListener
                      onClickAway={handleTooltipCloseMatplotlib}
                    >
                      <Tooltip
                        PopperProps={{
                          disablePortal: true,
                        }}
                        onClose={handleTooltipCloseMatplotlib}
                        open={openMatplotlib}
                        disableFocusListener
                        disableHoverListener
                        disableTouchListener
                        title="Matplotlib"
                      >
                        <Button onClick={handleTooltipOpenMatplotlib}>
                          {" "}
                          <Avatar src={MatplotlibImg} />
                        </Button>
                      </Tooltip>
                    </ClickAwayListener>
                  </div>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
            <div className="col" data-aos="fade-left">
              <div className="card shadow-sm">
                <div className="card-body">
                  <br />
                  <h5
                    className="card-text"
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                    }}
                  >
                    <strong>Marketing et Communication</strong>
                    <br />
                  </h5>
                  <div className="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /> 
      </main>
    </div>
  );
};

export default Competencesdev;
