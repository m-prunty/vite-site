DROP DATABASE IF EXISTS `book_store`;
CREATE DATABASE IF NOT EXISTS `book_store`;
USE `book_store`;

DROP TABLE IF EXISTS `books`;
CREATE TABLE `books`(
		book_id INT NOT NULL AUTO_INCREMENT,
		book_key VARCHAR(15) NOT NULL UNIQUE, 
		title VARCHAR(50),
		cover_i INT,
		quantity INT,
		price INT,
		year DATETIME,
		PRIMARY KEY (book_id, book_key)
		);

DROP TABLE IF EXISTS `author`;
CREATE TABLE `author`(
		author_id INT NOT NULL AUTO_INCREMENT,
		author_key VARCHAR(15) NOT NULL UNIQUE,
		name VARCHAR(50), 
		photo INT,
		dob DATETIME,
		PRIMARY KEY (author_id, author_key)
		);

DROP TABLE IF EXISTS `author_books`;
CREATE TABLE `author_books`(
		book_id INT,   
		author_id INT,  
		PRIMARY KEY(book_id, author_id),
		INDEX(author_id, book_id),
		FOREIGN KEY (book_id) REFERENCES books(book_id),
		FOREIGN KEY (author_id) REFERENCES author(author_id)
	);

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
		cust_id INT NOT NULL auto_increment, 
		name VARCHAR(50),
		address VARCHAR(50),
		PRIMARY KEY (cust_id)
	);

DROP TABLE IF EXISTS `order_books`;
CREATE TABLE `order_books` (
		order_id INT NOT NULL auto_increment, 
		book_id INT NOT NULL ,
		cust_id INT NOT NULL , 
		quantity INT,
		order_date DATETIME,
		fulfilled INT,
		PRIMARY KEY (order_id),
		FOREIGN KEY (book_id) REFERENCES books(book_id),
		FOREIGN KEY (cust_id) REFERENCES customer(cust_id)
		);



DROP TABLE IF EXISTS `backorder`;
CREATE TABLE `backorder` (
		backorder_id INT NOT NULL auto_increment,
		order_id INT NOT NULL,
		quantity INT,
		backorder_date DATETIME,
		PRIMARY KEY (backorder_id, order_id),
		FOREIGN KEY (order_id) REFERENCES order_books(order_id)
);
