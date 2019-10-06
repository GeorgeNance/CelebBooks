import React from "react";
import Book from "./Book/Book";

const BookList = props => {
  const books = props.books
    ? props.books.map((book, index) => {
        return <Book key={index} book={book}></Book>;
      })
    : null;

  return <div>{books}</div>;
};

export default BookList;
