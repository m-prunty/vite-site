import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:8800/books/${id}`);
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};


function BookItem({book}){//{ id, title, author, image }) {
  const navigate = useNavigate();
  //console.log(book);
  return (
    <div
      className="bookItem">
    <div
      onClick={() => {
        navigate("/books/" + book.bookid);
      }}
    >
      <h1> { book.booktitle } </h1>
      <div style={{ backgroundImage: `url(${book.image})` }} className="bgImage" />
      <h2> { book.author }</h2>
    </div>
    <div>
      <button className="delete" onClick={() => handleDelete(book.bookid)}>Delete</button>
      <button className="update">
        <Link
          to={`${book.bookid}/update`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Update
        </Link>
      </button>
    </div>
    </div>

  );
}

export default BookItem;
