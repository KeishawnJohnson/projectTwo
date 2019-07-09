

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('top', 'white', 'summer', 'work', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('top', 'black', 'spring', 'casual', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('bottom', 'Blue', 'summer', 'work', 'male');

INSERT INTO outfit (type, color, season, occasion, gender)
VALUES ('dress', 'black', 'winter', 'athletic', 'female');

select * from outfit
where season = "Summer" and occasion = "casual" ;