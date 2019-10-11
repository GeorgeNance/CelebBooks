import React from "react";
import style from "./Navigation.module.css";
import SearchBar from "./SearchBar/SearchBar";

const Navigation = props => {
  return (
    <header className={style.Navigation}>
      <h1>CelebBooks 📚</h1>
      <SearchBar changed={props.changed}></SearchBar>
      <p>___</p>
    </header>
  );
};

export default Navigation;
