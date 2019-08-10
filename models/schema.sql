DROP DATABASE IF EXISTS smoothiesDB;
CREATE DATABASE smoothiesDB;

USE DATABASE smoothiesDB;
CREATE TABLE categories(
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(255) not null,
    foodGroup VARCHAR(255) not null,
    primary key (item_id)
);

CREATE TABLE smoothie(
    id INT AUTO_INCREMENT NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [description] TEXT NOT NULL,
    
);



DROP DATABASE IF EXISTS smoothiesDB;
    item_id INT AUTO_INCREMENT NOT NULL,
    ingredient1 VARCHAR(255) not null,
    ingredient2 VARCHAR(255) not null,
    ingredients3 VARCHAR(255) not null,
    ingredients4 VARCHAR(255) not null,
    ingredients5 VARCHAR(255) not null,
    -- ingredients6 VARCHAR(255) not null,
    -- ingredients7 VARCHAR(255) not null,
    -- ingredients8 VARCHAR(255) not null,
CREATE DATABASE smoothiesDB;