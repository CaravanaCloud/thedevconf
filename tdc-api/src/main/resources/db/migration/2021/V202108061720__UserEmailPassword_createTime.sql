alter table UserEmailPassword_tdc add column createTime datetime;
update UserEmailPassword_tdc set createTime = current_date where createTime is null;