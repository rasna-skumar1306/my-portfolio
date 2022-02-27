import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div className="">
        <a href="https://www.linkedin.com/in/rasswanth-senthilkumar-2bb01b184/">
          <BsLinkedin />
        </a>
      </div>
      <div className="">
        <a href="https://github.com/rasna-skumar1306">
          <BsGithub />
        </a>
      </div>
      <div className="">
        <a href="https://www.youtube.com/channel/UCWd-LUdoLTjwgS5R7L_bv9A">
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
