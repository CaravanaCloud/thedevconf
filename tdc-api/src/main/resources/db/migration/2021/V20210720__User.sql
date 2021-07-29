CREATE TABLE User_tdc (
    id int NOT NULL AUTO_INCREMENT,
    language varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    company varchar(255) NOT NULL,
    occupation varchar(255) NOT NULL,
    country varchar(255) NOT NULL,
    city varchar(12288) NOT NULL,
    gender varchar(255) NOT NULL,
    ethnicity varchar(255) NOT NULL,
    pcd varchar(255) NOT NULL,
    acceptedTerms int NOT NULL,
    PRIMARY KEY (id)
);
