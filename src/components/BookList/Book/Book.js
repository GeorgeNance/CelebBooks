import React, { useEffect, useState } from "react";

const Book = props => {
  const book = props.book;
  console.log(book);

  return (
    <div>
      <h4>{book.title}</h4>
      <p>{book.title}</p>
      <img src={book.image ? book.image : null}></img>
    </div>
  );
};

export default Book;
