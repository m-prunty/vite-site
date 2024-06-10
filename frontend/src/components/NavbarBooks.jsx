import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import Logo from "/quad_parabola_fin.svg";



function NavbarBooks() {
  const [expandNavbar, setExpandNavbar] = useState(false);


  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/books"> Book Store </Link>
        <Link to="/books/addsearch"> Search More Books </Link>
        <Link to="/books/cart"> Shopping Cart </Link>
    {  //      <Link to="/projects"> Projects </Link>
         }
      </div>
    </div>
  
  );
}

export default NavbarBooks;
