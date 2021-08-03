CREATE TABLE `UserEmailPassword_tdc` (
  `email` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL,
  `hash` BLOB NOT NULL,
  PRIMARY KEY (`email`)
);