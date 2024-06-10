import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axiosConfig";

function GetAuthor({ author_key }) {
  const [author, setAuthor] = useState(null);
  console.log(author_key);

  useEffect(() => {
    const fetchAuthor = async () => {
      try {
        const res = await axios.get("/authors/" + author_key);
        console.log(res.data);
        setAuthor(res.data);
      } catch (err) {
        console.log(err);
        try {
          const res = await axios.get("/ol/authors/" + author_key);
          console.log(res.data);
          setAuthor({
            ...res.data,
            photo: res.data.photos ? res.data.photos[0] : null,
          });
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchAuthor();
  }, [author_key]);

  if (!author) return null;

  return (
    <div className="author">
      <h2>{author.name}</h2>
      {author.photo && (
        <img src={`http://covers.openlibrary.org/b/id/${author.photo}-M.jpg`} alt={author.name} />
      )}
      <p>{author.bio}</p>
    </div>
  );

}
export default GetAuthor;
