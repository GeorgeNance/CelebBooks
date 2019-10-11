import React, { useEffect, useState } from "react";
import style from "./Book.module.css";
const Book = ({ book }) => {
  return (
    <div className={style.Book}>
      <a href={book.url} target="_blank">
        <img
          src={book.cover ? book.cover : null}
          title={book.title}
          alt={book.title}
        ></img>
      </a>
    </div>
  );
};

export default Book;
