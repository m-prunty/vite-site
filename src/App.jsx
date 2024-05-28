import "./App.css";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
//import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Books from "./client/Books";
import BookDisplay from "./pages/BookDisplay"
import Add from "./client/Add";
import Update from "./client/Update";
import AddSearch from "./client/AddSearch";
//import ProjectDisplay from "./pages/ProjectDisplay";

function BookStore(){
  return (
    <div><Outlet /> 
      <Routes>
      </Routes>
      </div>
  );
}
          {/*
        <li><Link to="/products/electronics">Electronics</Link></li>
        <li><Link to="/products/clothing">Clothing</Link></li>
        <li><Link to="/products/books">Books</Link></li>
          */}
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/books/*" element={<BookStore />}>
            <Route index element={<Books />} />
            <Route path='*' element={<Books />} />
            <Route path=":id" element={<BookDisplay />} />
            <Route path="add" element={<Add />} />
            <Route path=":id/update" element={<Update />} />
            <Route path="addSearch" element={<AddSearch />} />
          </Route>
          {//          <Route path="/projects" element={<Projects />} />
          //<Route path="/project/:id" element={<ProjectDisplay />} />
          }
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
