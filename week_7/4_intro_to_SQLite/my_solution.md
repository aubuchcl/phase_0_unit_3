# U3.W7: Intro to SQLite

## Release 0: Create a dummy database
<p>
Christophers-MacBook-Pro:~ aubuchcl$ sqlite3 dummy.db<br>
SQLite version 3.7.13 2012-07-17 17:46:21<br>
Enter ".help" for instructions<br>
Enter SQL statements terminated with a ";"<br>
</p>

## Release 1: Insert Data 
<p>sqlite> CREATE TABLE users (
   ...> id INTEGER PRIMARY KEY AUTOINCREMENT, <br>
   ...> first_name VARCHAR(64) NOT NULL, <br>
   ...> last_name VARCHAR(64) NOT NULL, <br>
   ...> email VARCHAR(128) UNIQUE NOT NULL, <br>
   ...> created_at DATETIME NOT NULL <br>
   ...> ,created_at DATETIME NOT NULL <br>
   ...> );<br>
</p>
## Release 2: Multi-line commands
<p>
sqlite> INSERT INTO users<br>
   ...> (first_name, last_name, email, created_at, updated_at)<br>
   ...> VALUES<br>
   ...> ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));<br>
sqlite> SELECT * FROM users;<br>
id          first_name  last_name   email    created_at           updated_at         <br>
----------  ----------  ----------  ---------------------  ----------------  -------------------<br>
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-04-26 <br>14:58:26  2014-04-26 14:58:26<br>
</p>
## Release 3: Add a column
<p> This doesnt output anything until you call .schema users.  In this case it displays the table with the addition of the nickname column
</p>

## Release 4: Change a value
<p>
sqlite> UPDATE users SET nicknames='ninja coder' WHERE id=1;<br>
sqlite> SELECT * FROM users;<br>
id          first_name  last_name   email                  created_at           updated_at           nicknames <br>
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------<br>
1           Kimmy       Lin         kimmy@devbootcamp.com  2014-04-26 17:49:24  2014-04-26 17:49:24  ninja coder<br>
sqlite> .exit

</p>

## Release 5: Reflect
<!-- Add your reflection here -->