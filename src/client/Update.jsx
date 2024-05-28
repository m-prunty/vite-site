import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import  BookDisplay  from "../pages/BookDisplay";

const Update = () => {
  const [book, setBook] = useState({
    booktitle: "",
    author: "",
    quantityinstock: null,
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      console.log({bookId});
      await axios.put(`http://localhost:8800/books/${bookId}/update`, book);
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
    <BookDisplay />
      <h1>Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="booktitle"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="author"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="quantityinstock"
        onChange={handleChange}
      />
      <p> {bookId}</p>
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/books">See all books</Link>
    </div>
  );
};

export default Update;
