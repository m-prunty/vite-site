import axios from "../axiosConfig";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Books from "./Books";
import SearchWorks from "./SearchWorks";


//{ const [book, setBook] = useState({
const SearchAdd = () => {
  
  const [works, setWorks] = useState([]);
  const [query, setQuery] = useState({});

  const handleChange = (e) => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const getSearch = async () => {
    try {
      const q = {q : query.author, title : query.title} 
      console.log(q)
      const res = await axios.get("/ol/search", {params : q});
      console.log(res.data);
      setWorks(res.data.docs?.map(object => {
         return {...object, src: 'OL'}
        }));
    } catch (err) {
      console.log(err);
    }
    //return ( <SearchWorks works={works} /> );
  };
  useEffect(() => {
    getSearch();
  }, []);

      console.log(works);
  return(
    <div>
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
          <button onClick={getSearch}>Add</button>
        </div>
      <div>
        {works[0]&&<SearchWorks works={works} />}
      </div>
    </div>
      );
};


export default SearchAdd;

