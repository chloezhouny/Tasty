DROP DATABASE IF EXISTS tasty_db;
CREATE DATABASE tasty_db;
USE tasty_db;

CREATE TABLE orders
(
	id int NOT NULL AUTO_INCREMENT,
	order_name varchar(255) NOT NULL,
	prepared BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
