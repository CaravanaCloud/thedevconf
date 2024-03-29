create table tdc_form_data (
    id bigint not null,
    allInput varchar(255),
    captcha varchar(255),
    city varchar(255),
    cityId varchar(255),
    company varchar(255),
    companyRole varchar(255),
    country varchar(255),
    countryState varchar(255),
    custom0 varchar(255),
    custom1 varchar(255),
    custom2 varchar(255),
    custom3 varchar(255),
    custom4 varchar(255),
    custom5 varchar(255),
    custom6 varchar(255),
    custom7 varchar(255),
    custom8 varchar(255),
    custom9 varchar(255),
    email varchar(255),
    fullName varchar(255),
    pageCode varchar(255),
    phone varchar(255),
    zip varchar(255),
    acceptPrivacy bit,
    acceptTerms bit,
    accept0 bit,
    accept1 bit,
    accept2 bit,
    primary key (id)
);