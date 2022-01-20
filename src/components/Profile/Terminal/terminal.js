import * as React from "react";
import "./terminal.css";
import MathieuLogo from "./MathieuLogo.png";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import MiniMaps from "./MiniMaps";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 0 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Terminal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />

      <div id="terminalbody">
        <div data-aos="zoom-in-left" data-duration="12000">
          <img
            src={MathieuLogo}
            alt=""
            style={{
              width: "200px",
            }}
          />{" "}
        </div>
        <div className="fakeMenu" style={{ color: "black" }}>
          <div className="fakeButtons fakeClose"></div>
          <div className="fakeButtons fakeMinimize"></div>
          <div className="fakeButtons fakeZoom"></div>
        </div>
        <div className="fakeScreen">
          <p
            className="line1"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
            }}
          >
            {">"}&nbsp;Mathieu Vialatte (22 ans)
            <span className="cursor1">_</span>
          </p>
          <p className="line2">
            <Button onClick={handleClickOpen}>
              <b
                className="line2"
                style={{
                  fontSize: "1rem",
                }}
              >
                📍 Adresse : Toulon{" "}
              </b>
            </Button>
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
              style={{
                width: "100%",
              }}
            >
              <BootstrapDialogTitle
                id="customized-dialog-title"
                onClose={handleClose}
                style={{
                  backgroundImage:
                    "url(" + require("./bois-clair.webp").default + ")",
                }}
              >
                <br />
                <b> &nbsp; Mon adresse :</b>
                &nbsp;
                <br />
                &nbsp;Chemin de La Serinette
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;Toulon, 83000 France
                <br />
                <br />
                <MiniMaps />
                <br />
                <br />
              </BootstrapDialogTitle>
            </BootstrapDialog>
            <span className="cursor2">_</span>
          </p>
          <br />
          <p className="line3">
            {">"}
            <a href="mailto: atomvisualjs@gmail.com">
              <b
                className="line3"
                style={{
                  fontWeight: "bold",

                  fontSize: "1rem",
                }}
              >
                &nbsp; <i className="fa fa-envelope" /> atomvisualjs@gmail.com{" "}
              </b>
            </a>
            <span className="cursor3">_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
