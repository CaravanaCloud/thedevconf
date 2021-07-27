create table mode_tdc(
    id int not null primary key auto_increment,
    code varchar(255),
    modeName varchar(255),
    description text
);

insert into mode_tdc (code, modeName) values ('BASICPASS', 'Basic Pass');
insert into mode_tdc (code, modeName) values ('VIPPASS', 'Vip Pass');
insert into mode_tdc (code, modeName) values ('PASSVIP', 'Passport Vip');
insert into mode_tdc (code, modeName) values ('PASSPREM', 'Passport Premium');
insert into mode_tdc (code, modeName) values ('PREMPASS', 'Premium Pass');
insert into mode_tdc (code, modeName) values ('CORPPASS', 'Corporate Pass');

