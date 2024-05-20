CREATE TABLE `table2` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`lastname` varchar(256),
	`password` varchar(256) NOT NULL,
	`role` enum('admin','user','employee') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `table2_id` PRIMARY KEY(`id`)
);
