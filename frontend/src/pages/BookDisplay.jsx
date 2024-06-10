import React , { useEffect, useState } from "react";
import { useParams,} from "react-router-dom";
import axios from "../axiosConfig";
import "../styles/BookDisplay.css";
import  ButAddOrder from "../components/ButAddOrder.jsx";
import GetAuthor from "../components/AuthorDisplay";

  


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
          const res = await axios.get("/ol/books/" +id)
          console.log(res.data);
          //setBook(res.data);
          setBook({...res.data, 
            cover: res.data.covers[0], 
            author_keys: res.data.authors && res.data.authors.length > 0 
            ? res.data.authors.map(author => author.key.substring(9))
            : ["Unknown Author"], // Handle cases where authors might be empty or undefined
            
            }
            );
          //book.authors
          console.log(book);
        } catch (err){
          console.log(err);
        }
      }
    };
    fetchABook();
  }, [id]);
 console.log(book)
  return (
    <div className="project">
      <h1> {book.title}</h1>
      <img src={`http://covers.openlibrary.org/b/id/${book.cover}-M.jpg`} />
      <h2>{book.author_name}</h2>
      <p>
        {book.price},
        {book.quantity},
        {book.title},
        {book.year},
      </p>
      <p>{book.cover}</p>
      <p>
        {//book.description
          }
      </p>
        <ButAddOrder book={book}/>
      <p>keys:{book.author_keys?.join(", ")}</p>
      {book.author_keys &&
        book.author_keys.map((author_key) => (
          <GetAuthor key={author_key} author_key={author_key} />
      ))}
    </div>
  );
}

export default BookDisplay;
