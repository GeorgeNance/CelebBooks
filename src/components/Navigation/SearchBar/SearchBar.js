import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = props => {
  return (
    <input
      className={style.SearchBar}
      type="text"
      placeholder="Search People"
      onChange={props.changed}
    ></input>
  );
};

export default SearchBar;
