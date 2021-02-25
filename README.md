# acctask
Task given by Applied Cloud Computing (1 - connection between nodejs &amp; database,2 - form using html/bootstrap to submit and save form data)

->Change the host,user,database and password in mysql.js according to your system.
->Create a table in your database named user with following query :
  create table user(user_name varchar(15) primary key,password varchar(70) not null);
->Run the server in test mode with 'npm test' or in normal mode with 'node server'.
->Check the data in the user table by running this query in sql software :
  select * from user;
