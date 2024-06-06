import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../axiosConfig";

const handleDelete = async (id) => {
  try {
    await axios.delete(`/books/${id}`);
    window.location.reload()
  } catch (err) {
    console.log(err);
  }
};

function AddButton(props){
  const [count, setCount] = useState(1);

  return(
    <div> 
      <button onClick={() => setCount(count + 1)}>+</button>

        <button 
          className="buy"
        >
          <Link
            to={`link`}
            style={{ color: "inherit", textDecoration: "none" }}>
            Order: {count}
          </Link>
        </button>
      <button onClick={() => {
                count > 1 ? setCount(count - 1) : setCount(1);
        }}>-</button>
      </div>
  )
};
//    <button className="delete" onClick={() => handleDelete(book.bookid)}>Delete</button>
function BookItem({book}){//{ id, title, author, image }) {
  const navigate = useNavigate();
  const olurl =  `url(http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg)`
  //console.log(olurl);
  //console.log(book);
  return (
    <div
      className="bookItem">
    <div
      onClick={() => {
        navigate("/books/" +book.cover_edition_key);
      }}
    >
      <h1> { book.title } </h1>
      <div style={{ backgroundImage: olurl }} className="bgImage" />
      <h2> { book.author_name && book.author_name.join(' & ') }</h2>
    </div>
    <div>
      <AddButton link="/books/add" book={book} />
    </div>
    </div>

  );
}

export default BookItem;
