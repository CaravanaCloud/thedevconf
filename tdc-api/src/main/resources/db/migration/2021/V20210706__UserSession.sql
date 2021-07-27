CREATE TABLE UserSession_tdc (
    clientId varchar(255) NOT NULL PRIMARY KEY,
    ctime timestamp DEFAULT NULL,
    email varchar(255) DEFAULT NULL,
    emailVerified int NOT NULL,
    familyName varchar(255) DEFAULT NULL,
    givenName varchar(255) DEFAULT NULL,
    idToken varchar(12288) DEFAULT NULL,
    locale varchar(255) DEFAULT NULL,
    modifiedTime timestamp DEFAULT NULL,
    name varchar(255) DEFAULT NULL,
    pictureUrl varchar(255) DEFAULT NULL
);
