import { Avatar } from "@mui/material";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";

// Css
import "./formation.scss";

// Images
import JsImg from "./assetsJs/js.png";
import ReactImg from "./assetsJs/react.png";
import ReduxImg from "./assetsJs/redux.jpg";

import NodeImg from "./assetsJs/node.png";
import ExpressImg from "./assetsJs/express.jpg";
import MongoImg from "./assetsJs/mongo.png";

import PythonImg from "./assetsJs/python.png";
import JupyterImg from "./assetsJs/jupyter.png";
import PandasImg from "./assetsJs/pandas.png";

const Formation = () => {
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

  return (
    <div>
      <main
        style={{
          backgroundImage: `url(https://static.vecteezy.com/ti/vecteur-libre/p1/1857360-metal-texture-fond-vectoriel.jpg)`,
        }}
      >
        <div className="album py-3">
          <div className="container">
            <br />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <br />

                    <h5 className="card-text">
                      <strong>Développeur Front-end</strong>
                      <br />
                      <small>Université d'Avignon</small>
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
                    </div>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <br />

                    <h5 className="card-text">
                      <strong>Développeur Back-end</strong>
                      <br />
                      <small>Université d'Avignon</small>
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
                      <ClickAwayListener
                        onClickAway={handleTooltipCloseExpress}
                      >
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
                    </div>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="zoom-in"
              
              >
                <div className="card shadow-sm">
                  <div className="card-body">
                    <br />

                    <h5 className="card-text">
                      <strong>Analyse de données</strong>
                      <br />
                      <small>Université d'Avignon</small>
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

                      <ClickAwayListener
                        onClickAway={handleTooltipCloseJupyter}
                      >
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
                    </div>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <br />

                    <h5 className="card-text">
                      <strong>Marketing et Communication</strong>
                      <br />
                      <small>Université d'Avignon</small>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Formation;
