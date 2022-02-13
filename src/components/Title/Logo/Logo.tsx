import React, { FC } from "react";
import logo_style from "./logo.module.css";

interface LogoConstructor {
  logo: string;
  title: string;
}

const Logo: FC<LogoConstructor> = ({ logo, title }) => {
  return (
    <div className={logo_style.container}>
      <p className={logo_style.title}> {title}</p>
      <div className={logo_style.image__container}>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Logo;
