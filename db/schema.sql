-- Dropping burgers_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Creating database --
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE `burgers` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `burger_name` varchar(30) COLLATE NOT NULL,
    `devoured` tinyint(1) DEFAULT NULL,
    `createdAt` timestamp NOT NULL,
    PRIMARY KEY (`id`)
)