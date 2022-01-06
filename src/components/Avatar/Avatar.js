
import "./avatar.scss"
import Moi from "../../assets/img/moi.png"

const Avatar = () => {
   
  return (
    <div>
      <img
        class="me"
        src={Moi}
        alt="moi"
      />
      <h2 style={{textAlign:"center"}}>Mathieu Vialatte </h2>

      <div class="social">
        <a href="https://twitter.com/bphillips201">
          <i id="twitter" class="icon-twitter"></i>
        </a>
        <i id="github" class="icon-github"></i>
        <i id="stack" class="icon-stackexchange"></i>
        <i id="linkedin" class="icon-linkedin-sign"></i>
        <i id="code" class="icon-code"></i>
        <i id="plus" class="icon-google-plus-sign"></i>
        <i id="mail" class="icon-envelope"></i>
      </div>
    </div>
  );
};

export default Avatar;
