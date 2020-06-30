-- Dropping burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creating database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
    `id` int NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(30) NOT NULL,
    `devoured` BOOLEAN NOT NULL,
    `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
)