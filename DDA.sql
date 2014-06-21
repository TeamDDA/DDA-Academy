DROP DATABASE IF EXISTS dda_game;

CREATE DATABASE dda_game;

USE dda_game;

CREATE TABLE subjects(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(50) NOT NULL,
	PRIMARY KEY(id)
) ENGINE = InnoDB;

CREATE TABLE questions(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	t_id INT UNSIGNED NOT NULL,
	q_text VARCHAR(250) NOT NULL,
	FOREIGN KEY (t_id) REFERENCES subjects(id),
	PRIMARY KEY(id)
) ENGINE = InnoDB;

CREATE TABLE answers(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	q_id INT UNSIGNED NOT NULL,
	a_text VARCHAR(250) NOT NULL,
	is_correct TINYINT(1) NOT NULL,
	FOREIGN KEY (q_id) REFERENCES questions(id),
	PRIMARY KEY(id)
) ENGINE = InnoDB;

INSERT INTO subjects(title)
VALUES ('Sport'),
	   ('History'),
	   ('Biology'),
	   ('Chemistry'),
	   ('Programming');
	   
INSERT INTO questions(t_id, q_text)
VALUES (1, 'Which country won 1994 FIFA World Cup?'),
	   (1, 'Where was the first FIFA World Cup held?'),
	   (1, 'Which country won most titles on FIVB Volleyball World League?'),
	   (1, 'Who won 2008 Wimbledon Championships?'),
	   (1, 'Which athlete is the highest-paid athlete in the world for 2013?'),
	   
	   (2, 'Which side did Bulgaria at World War II compete on?'),
	   (2, 'Which of the following presidents was shot and died afterwards?'),
	   (2, 'Who was defeated in the Battle of Varbitsa Pass by Krum the Fearsome?'),
	   (2, 'Which city/ies was/were bombed during World War II?'),
	   (2, 'Which year is the First Bulgarian Empire established?'),
	   
	   (3, 'How many bones are in the human body by adulthood?'),
	   (3, 'Which of these is not a Kingdom?'),
	   (3, 'Which of the following organisms can sense light?'),
	   (3, 'How many species are known on Earth?'),
	   (3, 'Which organisms has Photosynthesis as characteristic?'),

	   (4, 'How many electrons in a Hydrogen (H) atom?'),
	   (4, 'How many neutrons in a Hydrogen (H) atom?'),
	   (4, 'What do the letters "amu" stand for?'),
	   (4, 'If an atom has 13 electrons, how many shells will have electrons?'),
	   (4, 'What will happen to the pressure inside of a sealed tube if you raise the temperature?'),

	   (5, 'Which of the following programming languages is non object-oriented?'),
	   (5, 'How much is FA(16) – 10001011(2)?'),
	   (5, 'Which of the following text formats cannot containt images?'),
	   (5, 'Which of the following is the most commonly used type of database system model?'),
	   (5, 'Which of the following is a media player and is not a Microsoft product?');
	   

INSERT INTO answers(q_id, a_text, is_correct)
VALUES (1, 'Bulgaria', 0),
	   (1, 'Sweden', 0),
	   (1, 'Italy', 0),
	   (1, 'Brazil', 1),
	   
	   (2, 'Uruguay', 1),
	   (2, 'Italy', 0),
	   (2, 'France', 0),
	   (2, 'Brazil', 0),
	   
	   (3, 'Cuba', 0),
	   (3, 'Italy', 0),
	   (3, 'Russia', 0),
	   (3, 'Brazil', 1),
	   
	   (4, 'Bernard Tomic', 0),
	   (4, 'Henri Kontinen', 0),
	   (4, 'Grigor Dimitrov', 1),
	   (4, 'Filip Krajinovic', 0),
	   
	   (5, 'Floyd Mayweather', 1),
	   (5, 'Cristiano Ronaldo', 0),
	   (5, 'Lionel Messi', 0),
	   (5, 'LeBron James', 0),
	   
	   (6, 'Allies', 0),
	   (6, 'Axis', 1),
	   (6, 'Central Powers', 0),
	   (6, 'Entente', 0),
	   
	   (7, 'Boris Yeltsin', 0),
	   (7, 'Barack Obama', 0),
	   (7, 'John Kennedy', 1),
	   (7, 'Todor Zhivkov', 0),
	   
	   (8, 'Michael I Rangabe', 0),
	   (8, 'Leo V the Armenian', 0),
	   (8, 'Nikephoros I', 1),
	   (8, 'None of these', 0),
	   
	   (9, 'Hiroshima and Nagasaki', 1),
	   (9, 'Only Hiroshima', 0),
	   (9, 'Only Nagasaki', 0),
	   (9, 'None of these', 0),
	   
	   (10, '1018', 0),
	   (10, '681', 1),
	   (10, '781', 0),
	   (10, '1185', 0),
	   
	   (11, '270', 0),
	   (11, '206', 1),
	   (11, '256', 0),
	   (11, '512', 0),
	   
	   (12, 'Animals', 0),
	   (12, 'Fungi', 0),
	   (12, 'Plants', 0),
	   (12, 'All are Kingdoms', 1),
	   
	   (13, 'Human', 0),
	   (13, 'Spider', 0),
	   (13, 'Microbe', 0),
	   (13, 'All can Sense Light', 1),
	   
	   (14, '150', 0),
	   (14, '1 500', 0),
	   (14, '150 000', 0),
	   (14, 'More than 1 500 000', 1),
	   
	   (15, 'Plants', 1),
	   (15, 'Animals', 0),
	   (15, 'Humans', 0),
	   (15, 'None of these', 0),
	   
	   (16, 'One', 1),
	   (16, 'Two', 0),
	   (16, 'Three', 0),
	   (16, 'Four', 0),
	   
	   (17, 'Three', 0),
	   (17, 'One', 0),
	   (17, 'Two', 0),
	   (17, 'Zero', 1),
	   
	   (18, 'Absolute Metric Unit', 0),
	   (18, 'Actual Make Up', 0),
	   (18, 'Atomic Mass Unit', 1),
	   (18, 'None of the Above', 0),
	   
	   (19, 'One', 0),
	   (19, 'Two', 0),
	   (19, 'Three', 1),
	   (19, 'Four', 0),
	   
	   (20, 'Go up', 1),
	   (20, 'Go down', 0),
	   (20, 'Stay the same', 0),
	   (20, 'It depends on the pressure', 0),
	   
	   (21, 'C#', 0),
	   (21, 'Java', 0),
	   (21, 'Python', 0),
	   (21, 'Pascal', 1),
	   
	   (22, 'AG(16)', 0),
	   (22, '157(8)', 1),
	   (22, '111(16)', 0),
	   (22, '110111(2)', 0),
	   
	   (23, '.rtf (Rich Text Format)', 0),
	   (23, '.odt (OpenDocument Text)', 1),
	   (23, '.doc (Microsoft Word Document', 0),
	   (23, 'All of the above formats CAN contain images', 0),
	   
	   (24, 'Network model', 0),
	   (24, 'Relational model', 1),
	   (24, 'Object oriented model', 0),
	   (24, 'Associative model', 0),
	   
	   (25, 'Media Player Classic', 0),
	   (25, 'Audacity', 0),
	   (25, 'QuickTime', 1),
	   (25, 'Flash Player', 0);
	   
SELECT q_text, a_text, title, is_correct FROM answers
JOIN questions ON questions.id = answers.q_id
JOIN subjects ON questions.t_id = subjects.id;