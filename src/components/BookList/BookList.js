import React from "react";
import Book from "./Book/Book";
import style from "./BookList.module.css";

const BookList = ({ person }) => {
  const books = person.books
    ? person.books.map((book, index) => {
        return <Book key={index} book={book}></Book>;
      })
    : null;

  return (
    <div className={style.BookList}>
      <h2>{person.name}'s Recommended Books</h2>
      <hr></hr>
      <div className={style.Content}>{books}</div>
    </div>
  );
};

export default BookList;
