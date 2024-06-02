import axios from "../axiosConfig";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Books from "./Books";


//{ const [book, setBook] = useState({
const AddSearch = () => {
  
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState({});

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
const searchBooks = async () => {
  try {
    const q = {q : query.author, title : query.title} 
    console.log(q)
    const res = await axios.get("/books/olsearch", {params : q});
    console.log(res.data);
  //  setBooks(res.data);
  } catch (err) {
    console.log(err);
  }
};
useEffect(() => {
  searchBooks();
}, []);

return(
    <div className="form">
      <h1>Add New Book</h1>
      <input
          type="text"
          placeholder="Book title"
          name="title"
          onChange={handleChange}
        />
        <input
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
        <button onClick={searchBooks}>Add</button>
      </div>
    );
  };


export default AddSearch;

