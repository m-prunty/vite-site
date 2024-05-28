import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Books from "./Books";


//{ const [book, setBook] = useState({
const AddSearch = () => {
  const [book, setBook] = useState();

  useEffect(() => {
    const searchBooks = async () => {
      try {
        const res = await axios.get("https://openlibrary.org/search.json?", bk);
        console.log(res.data);
        //setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    searchBooks();
}, []);

  return(
      <div className="form">
        <h1>Add New Book</h1>
        <input
          type="text"
          placeholder="Book title"
          name="booktitle"
          onChange={handleChange}
        />
        <textarea
          rows={5}
          type="text"
          placeholder="Book author"
          name="author"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Book quantity"
          name="quantityinstock"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Book id"
          name="bookid"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Add</button>
      </div>
    );
  };


//quantityinstock: null,
//bookid: null,
// })}}
export default AddSearch;

