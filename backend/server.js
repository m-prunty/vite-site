import express from "express"
import mysql from "mysql2"
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
