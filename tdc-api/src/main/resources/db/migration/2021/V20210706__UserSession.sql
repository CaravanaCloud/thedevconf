CREATE TABLE `UserSession` (
    `clientId` varchar(255) NOT NULL,
    `ctime` datetime(6) DEFAULT NULL,
    `email` varchar(255) DEFAULT NULL,
    `emailVerified` bit(1) NOT NULL,
    `familyName` varchar(255) DEFAULT NULL,
    `givenName` varchar(255) DEFAULT NULL,
    `idToken` varchar(12288) DEFAULT NULL,
    `locale` varchar(255) DEFAULT NULL,
    `modifiedTime` datetime(6) DEFAULT NULL,
    `name` varchar(255) DEFAULT NULL,
    `pictureUrl` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`clientId`)
);
