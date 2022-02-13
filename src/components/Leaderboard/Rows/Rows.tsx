import React, { FC } from "react";
import rows_style from "./rows.module.css";

interface RowElements {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  labelRow: boolean;
}

const Rows: FC<RowElements> = ({
  firstColumn,
  secondColumn,
  thirdColumn,
  labelRow,
}) => {
  return (
    <div className={rows_style.container}>
      <div
        className={
          labelRow
            ? `${rows_style.first} ${rows_style.label__first}`
            : `${rows_style.first}`
        }
      >
        {firstColumn}
      </div>
      <div
        className={
          labelRow
            ? `${rows_style.second} ${rows_style.label__second}`
            : `${rows_style.second}`
        }
      >
        {secondColumn}
      </div>
      <div
        className={
          labelRow
            ? `${rows_style.third} ${rows_style.label__first}`
            : `${rows_style.third}`
        }
      >
        {thirdColumn}
      </div>
    </div>
  );
};

export default Rows;
