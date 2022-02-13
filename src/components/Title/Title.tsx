import React from "react";
import Logo from "./Logo/Logo";
import projectLogo from "../../images/logo.png";
import junkbustersLogo from "../../images/junkbusters.png";
import title_style from "./title.module.css";
import Heading from "./Heading/Heading";

const Title = () => {
  return (
    <div className={title_style.container}>
      <Logo title="Cleanup Challenge" logo={projectLogo} />
      <Heading />
      <Logo title="Un proiect" logo={junkbustersLogo} />
    </div>
  );
};

export default Title;
