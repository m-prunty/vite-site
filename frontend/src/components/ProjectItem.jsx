import React from "react";
import { useNavigate } from "react-router-dom";

function BookItem({ image, title, author, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="bookItem"
      onClick={() => {
        navigate("/books/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> { name } </h1>
      <h2> { author }</h2>
    </div>
  );
}

export default ProjectItem;
