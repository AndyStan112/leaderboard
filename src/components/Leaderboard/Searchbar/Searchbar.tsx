import React, { useEffect, useRef } from "react";
// import { ChangeEvent } from "react";
import searchbar_style from "./searchbar.module.css";
import { FaSearch } from "react-icons/fa";
import { debounce, debounceTime, filter, fromEvent, map } from "rxjs";

type Props = { onInput: (data: string) => unknown };

const Searchbar: React.FC<Props> = ({ onInput }) => {
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const sub = fromEvent<InputEvent>(inputRef.current, "input")
      .pipe(
        debounceTime(300),
        map(() => inputRef.current!.value)
      )
      .subscribe(onInput);

    return sub.unsubscribe.bind(sub);
  }, [inputRef.current]);

  return (
    <div className={searchbar_style.container}>
      <div className={searchbar_style.search__container}>
        <div className={searchbar_style.search}>
          <FaSearch className={searchbar_style.search__icon} />
        </div>
        <input
          type="text"
          className={searchbar_style.search__bar}
          ref={inputRef}
          //   onChange={handler}
        />
      </div>
    </div>
  );
};

export default Searchbar;
