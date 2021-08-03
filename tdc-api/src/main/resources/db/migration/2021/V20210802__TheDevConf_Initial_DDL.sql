
CREATE TABLE `tdc_mode` (
    `id` bigint(20) NOT NULL,
    `code` varchar(255) DEFAULT NULL,
    `description` varchar(255) DEFAULT NULL,
    `modeName` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `tdc_brand` (
  `id` bigint(20) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `tdc_edition` (
    `id` bigint(20) NOT NULL,
    `code` varchar(255) DEFAULT NULL,
    `gateCloseTime` datetime(6) DEFAULT NULL,
    `gateOpenTime` datetime(6) DEFAULT NULL,
    `brand_id` bigint(20) DEFAULT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `UK_qpxnggtdbf12rfc7wcw1u3cyw` (`code`),
    KEY `FKqfkeoera9cy7s1dk7d5gaknl1` (`brand_id`),
    CONSTRAINT `FKqfkeoera9cy7s1dk7d5gaknl1` FOREIGN KEY (`brand_id`) REFERENCES `tdc_brand` (`id`)
);

CREATE TABLE `tdc_registration` (
  `id` bigint(20) NOT NULL,
  `edition_id` bigint(20) DEFAULT NULL,
  `mode_id` bigint(20) DEFAULT NULL,
  `person_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKi8rvefpcse8c5tvuevfy2vfnx` (`person_id`,`mode_id`,`edition_id`),
  KEY `FKgws7y3pfyunhjps0mg5y29uam` (`edition_id`),
  KEY `FKoidk9pf9fd1cjawlmpppvf724` (`mode_id`),
  CONSTRAINT `FKgws7y3pfyunhjps0mg5y29uam` FOREIGN KEY (`edition_id`) REFERENCES `tdc_edition` (`id`),
  CONSTRAINT `FKirhnyya8wj5wsmtqhhdlwf7fl` FOREIGN KEY (`person_id`) REFERENCES `User_tdc` (`id`),
  CONSTRAINT `FKoidk9pf9fd1cjawlmpppvf724` FOREIGN KEY (`mode_id`) REFERENCES `tdc_mode` (`id`)
);