import React from "react";
import { useParams } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function BookDisplay() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books/" + id);
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);


  return (
    <div className="book">
      <h1> {book.name}</h1>
      <img src={book.image} />
      <p>
        <b>Skills:</b> {book.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}

export default BookDisplay;
