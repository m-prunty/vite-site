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

async function fetchAndParseExternalData(book_key) {
	const externalSourceUrl = `https://openlibrary.org/books/${book_key}`;
	try {
		const response = await axios.get(externalSourceUrl);
		const externalData = response.data;
		console.log(`Fetched external data: ${JSON.stringify(externalData)}`);
		return externalData;
	} catch (error) {
		console.error(`Error fetching external data: ${error}`);
		throw new Error('Failed to fetch external data');
	}
}

app.get("/", (req, res) => {
	console.log("Root endpoint hit");
	res.json("hello this is the backend!");
});

app.get("/books", (req, res) => {
	console.log("Books endpoint hit");
	const q = "SELECT * FROM book_author_view";
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
	const q = "INSERT INTO books (`book_key`, `booktitle`, `author`, `quantityinstock`) VALUES (?);";
	const values = [
		req.body.book_key,
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
		const response = await axios.get('https://openlibrary.org/search.json', 
			{ params: req.query });
		console.log("Open Library response data:", response.data);
		res.json(response.data);
	} catch (error) {
		console.error("Error fetching data from Open Library:", error);
		res.status(500).send(error.message);
	}
});

app.get('/search/ol/:key', async (req, res) => {
	const book_key = req.params.key;
	const url = `https://openlibrary.org/books/${book_key}.json`
	console.log("Query parameters:", req.query);

	try {
		const response = await axios.get(url);
		console.log("Open Library response data:", response.data);
		res.json(response.data);
	} catch (error) {
		console.error("Error fetching data from Open Library:", error);
		res.status(500).send(error.message);
	}
});

app.delete("/books/:key", (req, res) => {
	const book_key = req.params.key;
	console.log(`Deleting book with key: ${book_key}`);
	const q = "DELETE FROM StockList WHERE book_key = ?";

	db.query(q, [book_key], (err, data) => {
		if (err) {
			console.error("Error deleting book:", err);
			return res.send(err);
		}
		res.json(data);
	});
});

app.get("/books/:key", (req, res) => {
	const book_key = req.params.key;
	console.log(`Fetching book with key: ${book_key}`);
	const q = "SELECT * FROM books WHERE book_key = ?";

	db.query(q, [book_key], (err, data) => {
	if (err) {
		console.error("Error fetching book:", err);
		return res.send(err);
	}
	if (data.length > 0){
		console.log(`Book found: ${JSON.stringify(data[0])}`);
		res.json(data[0]);
	} else {
		console.log("Book not in db, fetch from external source...");
		res.status(500).send("Error fetching from db");
		/*try {
		const externalData =	fetchAndParseExternalData(book_key);
		res.json(externalData);
		} catch (error) {
		res.status(500).send("Error fetching external data");
		}*/
	}
	});
});

app.put("/books/:book_key/update", (req, res) => {
	const book_key = req.params.book_key;
	console.log(`Updating book with ID: ${book_key}`);
	const q = "UPDATE books SET `booktitle`= ?, `author`= ?, `quantityinstock`= ? WHERE `book_key`= ?;";
	const values = [
		req.body.booktitle,
		req.body.author,
		req.body.quantityinstock,
	];

	db.query(q, [...values, book_key], (err, data) => {
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



