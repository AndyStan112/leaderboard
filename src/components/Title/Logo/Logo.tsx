import React, { FC } from "react";
import logo_style from "./logo.module.css";

interface LogoConstructor {
  logo: string;
  title: string;
  junkbusters?: boolean;
}

const Logo: FC<LogoConstructor> = ({ logo, title, junkbusters = false }) => {
  return (
    <div className={logo_style.container}>
      <p className={logo_style.title}> {title}</p>
      <div className={logo_style.image__container}>
        <img className={junkbusters ? logo_style.jb : ""} src={logo} alt="" />
      </div>
    </div>
  );
};

export default Logo;
