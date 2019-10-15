CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
burger VARCHAR(64),
devoured BOOLEAN
);

SELECT * FROM burgers;
