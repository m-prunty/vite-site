DROP DATABASE IF EXISTS `book_store`;
CREATE DATABASE IF NOT EXISTS `book_store`;
USE `book_store`;

DROP TABLE IF EXISTS `books`;
DROP TABLE IF EXISTS `authors`;
DROP TABLE IF EXISTS `author_books`;
DROP TABLE IF EXISTS `customers`;
DROP TABLE IF EXISTS `order_books`;
DROP TABLE IF EXISTS `backorder`;
DROP TABLE IF EXISTS `cart_book`;
DROP TABLE IF EXISTS `carts`;

CREATE TABLE `books`(
	book_id INT NOT NULL AUTO_INCREMENT,
	book_key VARCHAR(15) NOT NULL UNIQUE, 
	title VARCHAR(100),
	cover INT,
	description VARCHAR(500),
	year YEAR,
	quantity INT,
	price DECIMAL(10,2),
	PRIMARY KEY (book_id)
);

CREATE TABLE `authors`(
	author_id INT NOT NULL AUTO_INCREMENT,
	author_key VARCHAR(15) NOT NULL UNIQUE,
	name VARCHAR(50), 
	title VARCHAR(10),
	photo INT,
	dob DATE,
	bio VARCHAR(500),
	PRIMARY KEY (author_id)
);

CREATE TABLE `author_books`(
	book_id INT NOT NULL,   
	author_id INT NOT NULL,  
	PRIMARY KEY(book_id, author_id),
	INDEX(author_id, book_id),
	FOREIGN KEY (book_id) REFERENCES books(book_id),
	FOREIGN KEY (author_id) REFERENCES authors(author_id)
);

CREATE TABLE `customers` (
	cust_id INT NOT NULL AUTO_INCREMENT, 
	cust_uname VARCHAR(50) NOT NULL UNIQUE,
	name VARCHAR(50),
	address VARCHAR(100),
	PRIMARY KEY (cust_id),
	INDEX (cust_uname)
);

CREATE TABLE `order_books` (
	order_id INT NOT NULL AUTO_INCREMENT, 
	book_id INT NOT NULL,
	cust_id INT NOT NULL, 
	quantity INT NOT NULL,
	order_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	fulfilled INT DEFAULT 0,
	PRIMARY KEY (order_id),
	FOREIGN KEY (book_id) REFERENCES books(book_id),
	FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);

CREATE TABLE `backorder` (
	backorder_id INT NOT NULL AUTO_INCREMENT,
	order_id INT NOT NULL,
	quantity INT NOT NULL,
	backorder_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (backorder_id),
	FOREIGN KEY (order_id) REFERENCES order_books(order_id)
);

CREATE TABLE `carts` (
	cart_id INT NOT NULL AUTO_INCREMENT,   
	cust_id INT NOT NULL,
	PRIMARY KEY(cart_id),
	FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);

CREATE TABLE `cart_book` (
	cart_id INT NOT NULL,   
	book_id INT NOT NULL,  
	quantity INT NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	PRIMARY KEY(cart_id, book_id),
	INDEX(book_id, cart_id),
	FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
	FOREIGN KEY (book_id) REFERENCES books(book_id)
);


CREATE  OR REPLACE VIEW `book_author_view` AS
SELECT 
    b.book_id,
    b.book_key,
    b.title,
    b.cover,
    b.quantity,
    b.price,
    b.year,
    GROUP_CONCAT(a.name  ORDER BY a.author_id SEPARATOR ', ') AS authors,
    GROUP_CONCAT(a.author_key  ORDER BY a.author_id SEPARATOR ', ') AS author_keys
FROM 
    books b
LEFT JOIN 
    author_books ab ON b.book_id = ab.book_id
LEFT JOIN 
    authors a ON ab.author_id = a.author_id
GROUP BY 
    b.book_id, b.book_key, b.title, b.cover, b.quantity, b.price, b.year;




DELIMITER //
CREATE PROCEDURE InsertBookAndAuthor(
	IN pa_author_key VARCHAR(15),
	IN pa_author_name VARCHAR(50),
	IN pa_author_title VARCHAR(10),
	IN pa_photo INT,
	IN pa_dob DATE,
	IN pa_bio VARCHAR(500),
	IN pb_book_key VARCHAR(15),
	IN pb_title VARCHAR(100),
	IN pb_cover INT,
	IN pb_description VARCHAR(500),
	IN pb_year YEAR,
	IN pb_quantity INT,
	IN pb_price DECIMAL(10,2)
	)
	BEGIN
		DECLARE last_author_id INT;
		DECLARE last_book_id INT;

		START TRANSACTION;




		
	INSERT INTO authors (author_key, name, title, photo, dob, bio)
		VALUES (pa_author_key, pa_author_name, pa_author_title, pa_photo, pa_dob, pa_bio)
		ON DUPLICATE KEY
		UPDATE	`name`=VALUES(`name`),
			`title`=VALUES(`title`),
			`photo`=VALUES(`photo`),
			`dob`=VALUES(`dob`),
			`bio`=VALUES(`bio`);
			
		SELECT author_id INTO last_author_id
		FROM authors
		WHERE author_key = pa_author_key;

		INSERT INTO books (book_key, title, cover, description, year, quantity, price)
		VALUES (pb_book_key, pb_title, pb_cover, pb_description, pb_year, pb_quantity, pb_price)
		ON DUPLICATE KEY 
		UPDATE	`title`=VALUES(`title`), 
			`cover`=VALUES(`cover`),
			`description`=VALUES(`description`),
			`year`=VALUES(`year`), 
			`quantity`=VALUES(`quantity`),
			`price`=VALUES(`price`);

		SELECT book_id INTO last_book_id
		FROM books
		WHERE book_key = pb_book_key;

		INSERT INTO author_books (book_id, author_id)
		VALUES (last_book_id, last_author_id);

		COMMIT;
END // 

DELIMITER ;




CALL InsertBookAndAuthor(
	"OL53305A", "Neil Gaiman", "" ,7277125, STR_TO_DATE("10 November 1960", "%d %M %Y"),"bio",
	"OL25757642M", "The Nice and Accurate Prophecies of Agnes Nutter",
	9290896, "description", STR_TO_DATE("19900101","%Y%m%d"),10, 15.25 
);

CALL InsertBookAndAuthor(
	"OL23919A", "J. K. Rowling", "OBE", 5543033, STR_TO_DATE("31 July 1965", "%d %M %Y"),"bio",
	"OL39793700M", "Harry Potter and the Sorcerer's Stone",
	14444481,"description", STR_TO_DATE("19990101","%Y%m%d"), 10, 13.50
);

CALL InsertBookAndAuthor(
	"OL25712A", "Terry Pratchett", "Sir", 13441391, STR_TO_DATE("28 April 1948", "%d %M %Y"), "bio",
	"OL25757642M", "The Nice and Accurate Prophecies of Agnes Nutter",
	9290896, "description", STR_TO_DATE("19900101","%Y%m%d"),10, 15.25 
);
/*
IN pa_author_key VARCHAR(15),
	IN pa_author_name VARCHAR(50),
	IN pa_author_title VARCHAR(10),
	IN pa_photo INT,
	IN pa_dob DATE,
	IN pa_bio VARCHAR(500),
	IN pb_book_key VARCHAR(15),
	IN pb_title VARCHAR(100),
	IN pb_cover INT,
	IN pb_description VARCHAR(500),
	IN pb_year YEAR,
	IN pb_quantity INT,
	IN pb_price DECIMAL(10,2)
*/
