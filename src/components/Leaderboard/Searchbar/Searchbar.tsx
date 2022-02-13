import React from "react";
// import { ChangeEvent } from "react";
import searchbar_style from "./searchbar.module.css";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  //   const handler = (event: ChangeEvent<HTMLInputElement>) => {
  //     const query = event.target.value;
  //     input$.next(query);
  //   };
  //   const dispatch = useAppDispatch();
  //   const closeSearch = () => {
  //     dispatch({
  //       type: "searchbar/close",
  //     });
  //   };

  return (
    <div className={searchbar_style.container}>
      <div className={searchbar_style.search__container}>
        <div className={searchbar_style.search}>
          <FaSearch className={searchbar_style.search__icon} />
        </div>
        <input
          type="text"
          className={searchbar_style.search__bar}
          //   onChange={handler}
        />
      </div>
    </div>
  );
};

export default Searchbar;
