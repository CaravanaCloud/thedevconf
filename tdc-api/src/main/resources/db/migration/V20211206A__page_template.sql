create table if not exists `tdc_page_template` (
    `id` int not null primary key auto_increment,
    `code` varchar(255) not null unique,
    `content` LONGTEXT
);
