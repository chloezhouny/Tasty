CREATE DATABASE tasty_db;
USE tasty_db;

CREATE TABLE orders
(
	id int NOT NULL AUTO_INCREMENT,
	order_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
