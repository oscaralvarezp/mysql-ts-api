CREATE DATABASE IF NOT EXISTS node_ts_mysql;

USE node_ts_mysql;

CREATE TABLE posts(
    id INT(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(200) NOT NULL, 
    description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE posts;