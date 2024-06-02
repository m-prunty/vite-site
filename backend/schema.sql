DROP TABLE IF EXISTS `Books`;
CREATE TABLE `Books`(
		olkey VARCHAR(50) NOT NULL,
		title VARCHAR(50),
		author_name VARCHAR(50), 
		author_key VARCHAR(50),
		cover_i VARCHAR(50),
		quantityinstock INT,
		price INT,
		PRIMARY KEY (olkey)
		);

DROP TABLE IF EXISTS `OrderList`;
CREATE TABLE `OrderList` (
		orderid INT NOT NULL auto_increment, 
		olkey VARCHAR(50) NOT NULL,
		orderername VARCHAR(50),
		ordereraddress VARCHAR(50),
		quantity INT,
		fulfilled INT,
		PRIMARY KEY (orderid),
		FOREIGN KEY (olkey) REFERENCES Books(olkey)
		);

DROP TABLE IF EXISTS `BackOrderList`;
CREATE TABLE `BackOrderList` (
		backorderid INT NOT NULL auto_increment,
		orderid INT NOT NULL,
		quantity INT,
		PRIMARY KEY (backorderid),
		FOREIGN KEY (orderid) REFERENCES OrderList(orderid)
);
