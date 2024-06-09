import React from "react";
import { useEffect, useState } from "react";
import { useParams,} from "react-router-dom";
import axios from "../axiosConfig";
import "../styles/BookDisplay.css";
import  ButAddOrder from "../components/ButAddOrder.jsx"

function BookDisplay() {
  const { id } = useParams();
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchABook = async () => {
      try {
        const res = await axios.get("/books/" + id);
        
        console.log(res.data);
        setBook(res.data);
        console.log(book);

      } catch (err) {
        console.log(err);
        try{
          const res = await axios.get("/search/ol/" +id)
          console.log(res.data);
          //setBook(res.data);
          setBook({...res.data, cover: res.data.covers[0]});
          
          //book.authors
          console.log(book);
        } catch (err){
          console.log(err);
        }
      }
    };
    fetchABook();
  }, []);

 console.log(book)
  return (
    <div className="project">
      <h1> {book.title}</h1>
      <img src={`http://covers.openlibrary.org/b/id/${book.cover}-M.jpg`} />
      <p>
        {book.price},
        {book.quantity},
        {book.title},
        {book.year},
      </p>
      <p>{book.cover}</p>
      <p>
        {book.description}
      </p>
    </div>
  );
}

export default BookDisplay;
