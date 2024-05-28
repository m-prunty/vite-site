import React from "react";
import { useEffect, useState } from "react";
import { useParams,} from "react-router-dom";
import axios from "axios";
import "../styles/BookDisplay.css";

function BookDisplay() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchABook = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/" + id);
        setBook(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchABook();
  }, []);

  console.log(book)
  return (
    <div className="project">
      <h1> {book.booktitle}</h1>
      <img src={book.cover} />
      <p>
        {book.author}
      </p>
    </div>
  );
}

export default BookDisplay;
