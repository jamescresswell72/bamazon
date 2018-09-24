DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (

	item_id INTEGER AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
    );
    
    INSERT INTO 
		products (product_name, department_name, price, stock_quantity)
    VALUES
		("socks", "Clothing", 2.99, 200),
		("Playstation 4", "Electronics", 399.99, 20),
		("Backpack", "Travel Gear", 99.99, 50),
        ("GoPro", "Electronics", 499.99, 30),
        ("Coffee Beans", "Groceries", 15.99, 500),
        ("Pens", "Home Office", 3.99, 1000),
        ("MacBook", "Electronics", 2499.99, 80),
        ("Surface Pro", "Electronics", 1699.99, 75),
        ("Laptop Case", "Travel Gear", 39.99, 200),
        ("Peanuts", "Groceries", 6.99, 400);
    
    SELECT * FROM products;