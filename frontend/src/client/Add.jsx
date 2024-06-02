import axios from "../axiosConfig";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [book, setBook] = useState({
    booktitle: "",
    author: "",
    quantityinstock: null,
    //bookid: null,
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("/books/add", book);
      console.log(res);
      //<BookDisplay />
      navigate("/books");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div>
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
      <Link to="/books">See all books</Link>
      {error && "Something went wrong!"}
    </div>
    </div>
  );
};

export default Add;
