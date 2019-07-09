### Schema

drop database outfits_db;
CREATE DATABASE outfits_db;
USE outfits_db;

#Table for outfits
#User has the ability to add up to 4 seasons for a specific item (Only the first one is mandatory)
#User is able to add up 4 occasions (fomral, work, athletic, casual)
#User can choose one of the following clothing types (top, bottom, shoes, accessory) 
CREATE TABLE outfit
(
    id int NOT NULL AUTO_INCREMENT,
    type varchar(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
	season VARCHAR(50) NOT NULL,
    occasion VARCHAR(50) not null,
	gender VARCHAR(50) NOT NULL,
    url VARCHAR(50) ,
    PRIMARY KEY (id)
);


INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('top', 'white', 'summer', 'work', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('top', 'black', 'spring', 'casual', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('bottom', 'Blue', 'summer', 'work', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('dress', 'black', 'winter', 'athletic', 'female');

select * from outfit
;