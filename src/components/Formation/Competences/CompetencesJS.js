

/// Avatar 
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';


/// Images
import ReactImg from "./assetsJs/react.png";
import NodeImg from "./assetsJs/node.png";
import MongoImg from "./assetsJs/mongo.png";
import ExpressImg from "./assetsJs/express.png";
import Js from './assetsJs/js.png'

const CompetencesJS = () => {
  return (
    <div
      className="section  text-center"
      style={{ color: "white", backgroundColor: "transparent" }}
    >
      <div
       
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="Npm">
          <Avatar src={Js} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="ReactJS">
          <Avatar src={ReactImg} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="NodeJS">
          <Avatar src={NodeImg} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="MongoDB">
          <Avatar src={MongoImg} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="ExpressJS">
          <Avatar src={ExpressImg} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>
        
      </div>
    </div>
  );
};

export default CompetencesJS;
