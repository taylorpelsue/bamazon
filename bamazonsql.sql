DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE items(
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(100) NOT NULL,
  item_department VARCHAR(100) NOT NULL,
  item_price INT default 0,
  item_stock INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Ball', 'Pet Supplies', 3, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Food', 'Pet Supplies', 20, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Spyro', 'Video Games', 50, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Skyrim', 'Video Games', 60, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Broom', 'Cleaning Supplies', 12, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Dish Soap', 'Cleaning Supplies', 2, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Wireless Headphones', 'Electronics', 80, 5);

INSERT INTO items (item_name, item_department, item_price, item_stock) values ('Tablet', 'Electronics', 200, 5);