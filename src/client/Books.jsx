import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BookItem from "../components/BookItem";
import "../styles/Books.css";


const Books = () => {
  //let bks = bks ? bks : [{}]
  const [books, setBooks] = useState();

  console.log(books);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);
  

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
return (
     <div className="books">
       <h1> All Books </h1>
      <nav className="bookList">
        <Link to="add">Add New Book</Link>
        <Link to="update">Account</Link>
      </nav>

       <div className="bookList">
        {books?.map((book, bookid ) => {
          return (
            <div key={book.bookid}>
              <BookItem  book={book} /> 
            </div>
               );
         })}
       </div>
     </div>
   );

  {/*  return (
    <div>
      <h1>Lama Book Shop</h1>
      <nav>
        <Link to="add">Profile</Link>
        <Link to="update">Account</Link>
      </nav>

      <div className="books">
        {books.map((book) => (
          <div key={book.bookid} className="book">
            {//<img src={book.cover} alt="" />
            }
            <h2>{book.booktitle}</h2>
            <h3>{book.author}</h3>
                {//<p>{book.desc}</p>
                  }
            <span>${book.quantityinstock}</span>
            <button className="delete" onClick={() => handleDelete(book.bookid)}>Delete</button>
            <button className="update">
              <Link
                to={`update/${book.bookid}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );*/
  }
};

export default Books;
