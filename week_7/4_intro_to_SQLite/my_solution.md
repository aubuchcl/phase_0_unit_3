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
<p>
	
What parts of your strategy worked? What problems did you face?
	My strategy was to use basic line breaks to give this markdown the smackdown.  I used the provided tutorial for the sql. It was extremely useful.<br>
What questions did you have while coding? What resources did you find to help you answer them?<br>
I used the tutorial provided to find all the answers, they were mostly syntax based.<br>
What concepts are you having trouble with, or did you just figure something out? If so, what?<br>
Not having a ton of trouble with any concepts in particular.  More just trying to make room in my brain for all of them. <br>
How confident are you with each of the Learning Competencies?<br>
Right in the middle.  I think I could do more problem sets like this with minimal research but not without the tutorial. <br>
Which parts of the challenge did you enjoy?<br>
learning something new<br>
Which parts of the challenge did you find tedious?<br>
when you forget to type or mistype in the terminal and cant go back.

</p>