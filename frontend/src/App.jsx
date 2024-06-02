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

const port_mysql = 8800

function BookStore(){
  return (
    <div>
      <Outlet /> 
    </div>
  );
}

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
            <Route path="addsearch" element={<AddSearch />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
