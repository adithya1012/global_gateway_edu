create table user(
id integer(30) primary key auto_increment,
firstname varchar(255),
lastname varchar(255),
email varchar(255),
phonenumber varchar(30),
role varchar(30),
password varchar(30),
status varchar(30),
createdtime timestamp,
updatedtime timestamp,
updatedby varchar(30)
);

alter table user
rename column firstname to first_name,
rename column lastname to last_name,
rename column createdtime to created_time,
rename column updatedtime to updated_time,
rename column updatedby to updated_by,
drop column phonenumber;

alter table user 
modify first_name varchar(30),
modify last_name varchar(30),
modify email varchar(30);

create table post(
postid integer(30) primary key auto_increment,
header longtext,
body longtext,
status varchar(30),
createdtime timestamp,
updatedtime timestamp,
updatedby varchar(30),
userid integer(30) not null,
foreign key(userid) references user(id)
);

alter table post
rename column postid to post_id,
rename column createdtime to created_time,
rename column updatedtime to updated_time,
rename column updatedby to updated_by,
rename column userid to user_id;

create table attachments(
id integer(30) primary key auto_increment,
url varchar(255),
updatedtime timestamp,
postid integer(30) not null,
foreign key(postid) references post(postid)
);

alter table attachments
rename column updatedtime to updated_time,
rename column postid to post_id;

create table messages(
id integer(30) primary key auto_increment,
msg longtext,
updatedtime timestamp,
postid integer(30) not null,
userid integer(30) not null,
foreign key(postid) references post(postid),
foreign key(userid) references user(id)
);

alter table messages
rename column updatedtime to updated_time,
rename column postid to post_id,
rename column userid to user_id;
