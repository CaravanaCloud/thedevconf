CREATE TABLE `UserEmail_tdc` (
  `email` varchar(255) NOT NULL,
  `validatedAt` datetime(6) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`email`),
  KEY `key_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `User_tdc` (`id`)
);