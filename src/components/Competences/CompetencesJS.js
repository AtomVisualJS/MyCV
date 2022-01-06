
/// Avatar 
import Avatar from "@mui/material/Avatar";
import Tooltip from '@mui/material/Tooltip';
/// Images
import ReactImg from "../../assets Cv/react-150x150.png";
import NodeImg from "../../assets Cv/Logo-Node-150x150.png";
import MongoImg from "../../assets Cv/mongodb-article-thumbnail.png";
import ExpressImg from "../../assets Cv/express-logo-150x150.png";
import NpmImg from "../../assets Cv/npm2.png";





const CompetencesJS = () => {

  return (
    <div
      className="section section-dark text-center"
      style={{ color: "white" }}
    >
      
      <div
        data-aos="fade-left"
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
       
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
        <div style={{ marginRight: "5%" }}>
        <Tooltip title="Npm">
          <Avatar src={NpmImg} sx={{ width: 56, height: 56 }} />
          </Tooltip>
        </div>

       </div>
     
    </div>
  );
};

export default CompetencesJS;
