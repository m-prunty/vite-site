import express from "express";
import axios from "axios";
import mysql from "mysql2";
import "./addRequire.js";
var cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "18.135.38.40",
  user: "website",
  password: "SQL_$1te_Pa$$",
  database: "book_store",
});

app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.json("hello this is the backend!");
});

app.get("/books", (req, res) => {
  console.log("Books endpoint hit");
  const q = "SELECT * FROM StockList";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching books:", err);
      return res.json(err);
    }
    res.json(data);
  });
});

app.post("/books/add", (req, res) => {
  console.log("Add book endpoint hit");
  const q = "INSERT INTO StockList (`bookid`, `booktitle`, `author`, `quantityinstock`) VALUES (?);";
  const values = [
    req.body.bookid,
    req.body.booktitle,
    req.body.author,
    req.body.quantityinstock,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Error adding book:", err);
      return res.json(err);
    }
    res.json(data);
  });
});


app.get('/search/ol', async (req, res) => {
  console.log("Query parameters:", req.query);

  try {
    const response = await axios.get('https://openlibrary.org/search.json', { params: req.query });
    console.log("Open Library response data:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Open Library:", error);
    res.status(500).send(error.message);
  }
});


app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log(`Deleting book with ID: ${bookId}`);
  const q = "DELETE FROM StockList WHERE bookid = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      console.error("Error deleting book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log(`Fetching book with ID: ${bookId}`);
  const q = "SELECT * FROM StockList WHERE bookid = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      console.error("Error fetching book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});
app.put("/books/:bookid/update", (req, res) => {
  const bookid = req.params.bookid;
  console.log(`Updating book with ID: ${bookid}`);
  const q = "UPDATE StockList SET `booktitle`= ?, `author`= ?, `quantityinstock`= ? WHERE `bookid`= ?;";
  const values = [
    req.body.booktitle,
    req.body.author,
    req.body.quantityinstock,
  ];

  db.query(q, [...values, bookid], (err, data) => {
    if (err) {
      console.error("Error updating book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});




/*
 * import express from "express";
import axios from "axios";
import mysql from "mysql2";
import "./addRequire.js";
var cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "18.135.38.40",
  user: "website",
  password: "SQL_$1te_Pa$$",
  database: "book_store",
});

app.get("/", (req, res) => {
  console.log("Root endpoint hit");
  res.json("hello this is the backend!");
});

app.get("/books", (req, res) => {
  console.log("Books endpoint hit");
  const q = "SELECT * FROM StockList";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Error fetching books:", err);
      return res.json(err);
    }
    res.json(data);
  });
});

app.post("/books/add", (req, res) => {
  console.log("Add book endpoint hit");
  const q = "INSERT INTO StockList (`bookid`, `booktitle`, `author`, `quantityinstock`) VALUES (?);";
  const values = [
    req.body.bookid,
    req.body.booktitle,
    req.body.author,
    req.body.quantityinstock,
  ];
  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Error adding book:", err);
      return res.json(err);
    }
    res.json(data);
  });
});

app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log(`Fetching book with ID: ${bookId}`);
  const q = "SELECT * FROM StockList WHERE bookid = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      console.error("Error fetching book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  console.log(`Deleting book with ID: ${bookId}`);
  const q = "DELETE FROM StockList WHERE bookid = ?";

  db.query(q, [bookId], (err, data) => {
    if (err) {
      console.error("Error deleting book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});

app.get('/books/olsearch', async (req, res) => {
  console.log("olsearch endpoint hit");
  console.log("Query parameters:", req.query);

  try {
    const response = await axios.get('https://openlibrary.org/search.json', { params: req.query });
    console.log("Open Library response data:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Open Library:", error);
    res.status(500).send(error.message);
  }
});

app.put("/books/:bookid/update", (req, res) => {
  const bookid = req.params.bookid;
  console.log(`Updating book with ID: ${bookid}`);
  const q = "UPDATE StockList SET `booktitle`= ?, `author`= ?, `quantityinstock`= ? WHERE `bookid`= ?;";
  const values = [
    req.body.booktitle,
    req.body.author,
    req.body.quantityinstock,
  ];

  db.query(q, [...values, bookid], (err, data) => {
    if (err) {
      console.error("Error updating book:", err);
      return res.send(err);
    }
    res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});

/*
 * import express from "express";
import axios from "axios";
import mysql from "mysql2";
import "./addRequire.js";

//import bodyparser from "body-parser"

//var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
app.use(express.json());
app.use(cors())

const db = mysql.createConnection({
        host:"18.135.38.40",//"marcusprunty.co.uk",
        user:"website",
        password:"SQL_$1te_Pa$$",
        database:"book_store",
});

app.get("/", (req, res) => { 
	res.json("hello this is the backend!");
});

app.get("/books", (req, res) => {
	const q = "SELECT * FROM StockList";
	db.query(q, (err,data) => {
		return err ? res.json(err) : res.json(data);
	});
});

app.post("/books/add", (req, res) => {
	const q = "INSERT INTO StockList ( `bookid`, `booktitle`, `author`, `quantityinstock`) VALUES (?);"
	const values = [
				req.body.bookid,
				req.body.booktitle,
				req.body.author,
				req.body.quantityinstock,
				];
	 db.query(q,[values],(err, data) => {
		return err ? res.json(err) : res.json(data);
	});
});
app.get("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " SELECT * FROM StockList WHERE bookid = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM StockList WHERE bookid = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get('/books/addSearch', async (req, res) => {
  console.log("test")
});

app.get('/books/olsearch', async (req, res) => {
  console.log(req)

  try {
	console.log(req)
    const response = await axios.get('https://openlibrary.org/search.json',   { params: req.params });
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/books/:bookid/update", (req, res) => {
	const bookid = req.params.bookid;
	const q = "UPDATE StockList SET `booktitle`= ?, `author`= ?, `quantityinstock`= ? WHERE `bookid`= ? ;"
	console.log(bookid);
	const values = [
				req.body.booktitle,
				req.body.author,
				req.body.quantityinstock,
				];

  db.query(q, [...values,bookid], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => (console.log("connected")))
*/
