import React, { FC } from "react";
import rows_style from "./rows.module.css";

interface RowElements {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
}

const Rows: FC<RowElements> = ({ firstColumn, secondColumn, thirdColumn }) => {
  return (
    <div className={rows_style.container}>
      <div className={rows_style.first}>{firstColumn}</div>
      <div className={rows_style.second}>{secondColumn}</div>
      <div className={rows_style.third}>{thirdColumn}</div>
    </div>
  );
};

export default Rows;
