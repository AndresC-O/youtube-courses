create database node_mysql_ts;
use node_mysql_ts;

CREATE TABLE posts(
	id INT(11) NOT NULL auto_increment primary key,
    title varchar(50) NOT NULL,
    description varchar(100) NOT NULL,
    image_url varchar(100),
    created_at timestamp default current_timestamp
);