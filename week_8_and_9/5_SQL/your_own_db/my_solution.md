<strong>Paired on this with Hunter Chapman</strong>
<p>
<br>	

<br>Last login: Sat May 10 14:23:43 on ttys000
<br>christophersmbp:~ aubuchcl$ cd code
<br>christophersmbp:code aubuchcl$ ls
<br>aubuchcl.github.io	my-first-repo		phase_0_unit_1		phase_0_unit_3		ssh
<br>gps1.html		p0_unit1_submission	phase_0_unit_2		railsbridge
<br>christophersmbp:code aubuchcl$ cd phase_0_unit_3
<br>christophersmbp:phase_0_unit_3 aubuchcl$ cd phase 
<br>.DS_Store     .git/         README.md     references/   resources.md  week_7/       week_8_and_9/ 
<br>christophersmbp:phase_0_unit_3 aubuchcl$ cd phase week_8_and_9/
<br>-bash: cd: phase: No such file or directory
<br>christophersmbp:phase_0_unit_3 aubuchcl$ cd week_8_and_9
<br>christophersmbp:week_8_and_9 aubuchcl$ ls
<br>1_git_started		3_JavaScript		5_SQL			7_cultural_blogs	readme.md
<br>2_HTML_CSS		4_Ruby			6_technical_blog.md	8_cohort_bonding.md
<br>christophersmbp:week_8_and_9 aubuchcl$ cd 5_SQL
<br>christophersmbp:5_SQL aubuchcl$ ls
<br>SQLite_gem	your_own_db
<br>christophersmbp:5_SQL aubuchcl$ cd your_own_db
<br>christophersmbp:your_own_db aubuchcl$ ls
<br>my_database.db		my_reflection.md	my_schema.md		my_solution.md		readme.md
<br>christophersmbp:your_own_db aubuchcl$ subl .
<br>christophersmbp:your_own_db aubuchcl$ sqlite3 my_database.db
<br>-- Loading resources from /Users/aubuchcl/.sqliterc<br>

<br>SQLite version 3.7.13 2012-07-17 17:46:21
<br>Enter ".help" for instructions
<br>Enter SQL statements terminated with a ";"
<br>sqlite> CREATE TABLE customers {
<br>   ...> }
<br>   ...> ;
<br>Error: unrecognized token: "{"
<br>sqlite> CREATE TABLE users (
<br>   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>   ...>   first_name VARCHAR(64) NOT NULL,
<br>   ...>   last_name  VARCHAR(64) NOT NULL,
<br>   ...>   email VARCHAR(128) UNIQUE NOT NULL,
<br>   ...>   created_at DATETIME NOT NULL,
<br>   ...>   updated_at DATETIME NOT NULL
<br>   ...> );
<br>sqlite> CREATE TABLE orders (
<br>   ...> id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>   ...> customer_id VARCHAR(64) NOT NULL,
<br>   ...> order_number INTEGER NOT NULL,
<br>   ...> total INTEGER NOT NULL,
<br>   ...> shipping_address VARCHAR(64) NOT NULL,
<br>   ...> created_at DATETIME NOT NULL,
<br>   ...> updated_at DATETIME NOT NULL
<br>   ...> );
<br>sqlite> .schema
<br>CREATE TABLE orders (
<br>id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>customer_id VARCHAR(64) NOT NULL,
<br>order_number INTEGER NOT NULL,
<br>total INTEGER NOT NULL,
<br>shipping_address VARCHAR(64) NOT NULL,
<br>created_at DATETIME NOT NULL,
<br>updated_at DATETIME NOT NULL
<br>);
<br>CREATE TABLE users (
<br>  id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>  first_name VARCHAR(64) NOT NULL,
<br>  last_name  VARCHAR(64) NOT NULL,
<br>  email VARCHAR(128) UNIQUE NOT NULL,
<br>  created_at DATETIME NOT NULL,
<br>  updated_at DATETIME NOT NULL
<br>);
<br>sqlite> INSERT INTO users
<br>   ...> (first_name, last_name, email, created_at, updated_at)
<br>   ...> VALUES
<br>   ...> ('Chris', 'Aubuchon', 'aubuchcl@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Hunter', 'Chapman', 'bootcoder@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Bob', 'Dole', 'bobdole@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Bill', 'Clinton', 'itwasntme@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('George', 'Bush', 'bushism@gmail.com', DATETIME('now'), DATETIME('now'));
<br>sqlite> SELECT * FROM users;
<br>id          first_name  last_name   email               created_at           updated_at         
<br>----------  ----------  ----------  ------------------  -------------------  -------------------
<br>1           Chris       Aubuchon    aubuchcl@gmail.com  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>2           Hunter      Chapman     bootcoder@gmail.co  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>3           Bob         Dole        bobdole@gmail.com   2014-05-10 21:42:53  2014-05-10 21:42:53
<br>4           Bill        Clinton     itwasntme@gmail.co  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>5           George      Bush        bushism@gmail.com   2014-05-10 21:42:53  2014-05-10 21:42:53
<br>sqlite> INSERT INTO users
<br>   ...> (first_name, last_name, email, created_at, updated_at)
<br>   ...> VALUES
<br>   ...> ('Al', 'Gore', 'manbearpig@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Ronald', 'Regan', 'bestprezever@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Woodrow', 'Wilson', 'nointernet@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Dwight', 'Eisenhower', 'whatsmicrosoft@gmail.com', DATETIME('now'), DATETIME('now')),
<br>   ...> ('Abe', 'Lincoln', 'honestabe@gmail.com', DATETIME('now'), DATETIME('now'));
<br>sqlite> SELECT * FROM users;
<br>id          first_name  last_name   email               created_at           updated_at         
<br>----------  ----------  ----------  ------------------  -------------------  -------------------
<br>1           Chris       Aubuchon    aubuchcl@gmail.com  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>2           Hunter      Chapman     bootcoder@gmail.co  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>3           Bob         Dole        bobdole@gmail.com   2014-05-10 21:42:53  2014-05-10 21:42:53
<br>4           Bill        Clinton     itwasntme@gmail.co  2014-05-10 21:42:53  2014-05-10 21:42:53
<br>5           George      Bush        bushism@gmail.com   2014-05-10 21:42:53  2014-05-10 21:42:53
<br>6           Al          Gore        manbearpig@gmail.c  2014-05-10 21:49:22  2014-05-10 21:49:22
<br>7           Ronald      Regan       bestprezever@gmail  2014-05-10 21:49:22  2014-05-10 21:49:22
<br>8           Woodrow     Wilson      nointernet@gmail.c  2014-05-10 21:49:22  2014-05-10 21:49:22
<br>9           Dwight      Eisenhower  whatsmicrosoft@gma  2014-05-10 21:49:22  2014-05-10 21:49:22
<br>10          Abe         Lincoln     honestabe@gmail.co  2014-05-10 21:49:22  2014-05-10 21:49:22
<br>sqlite> .schema
<br>CREATE TABLE orders (
<br>id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>customer_id VARCHAR(64) NOT NULL,
<br>order_number INTEGER NOT NULL,
<br>total INTEGER NOT NULL,
<br>shipping_address VARCHAR(64) NOT NULL,
<br>created_at DATETIME NOT NULL,
<br>updated_at DATETIME NOT NULL
<br>);
<br>CREATE TABLE users (
<br>  id INTEGER PRIMARY KEY AUTOINCREMENT,
<br>  first_name VARCHAR(64) NOT NULL,
<br>  last_name  VARCHAR(64) NOT NULL,
<br>  email VARCHAR(128) UNIQUE NOT NULL,
<br>  created_at DATETIME NOT NULL,
<br>  updated_at DATETIME NOT NULL
<br>);
<br>sqlite> INSERT INTO orders
<br>   ...> (customer_id, order_number, total, shipping_address, created_at, updated_at)
<br>   ...> VALUES
<br>   ...> (1, 101, 105, '1600 West Penn AVE', DATETIME('now'), DATETIME('now')),
<br>   ...> (5, 203, 150, '1600 West Penn AVE', DATETIME('now'), DATETIME('now')),
<br>   ...> (3, 400, 125, '1600 West Penn AVE', DATETIME('now'), DATETIME('now')),
<br>   ...> (7, 600, 233, '1600 West Penn AVE', DATETIME('now'), DATETIME('now')),
<br>   ...> (8, 99, 215, '1600 West Penn AVE', DATETIME('now'), DATETIME('now'));
<br>sqlite> SELECT * FROM orders
<br>   ...> ;
<br>id          customer_id  order_number  total       shipping_address    created_at           updated_at         
<br>----------  -----------  ------------  ----------  ------------------  -------------------  -------------------
<br>1           1            101           105         1600 West Penn AVE  2014-05-10 21:58:51  2014-05-10 21:58:51
<br>2           5            203           150         1600 West Penn AVE  2014-05-10 21:58:51  2014-05-10 21:58:51
<br>3           3            400           125         1600 West Penn AVE  2014-05-10 21:58:51  2014-05-10 21:58:51
<br>4           7            600           233         1600 West Penn AVE  2014-05-10 21:58:51  2014-05-10 21:58:51
<br>5           8            99            215         1600 West Penn AVE  2014-05-10 21:58:51  2014-05-10 21:58:51
<br>sqlite> SELECT users.first_name, orders.order_number FROM users JOIN orders ON (orders.customer_id = users.id)
<br>   ...> ;
<br>first_name  order_number
<br>----------  ------------
<br>Chris       101         
<br>George      203         
<br>Bob         400         
<br>Ronald      600         
<br>Woodrow     99          
<br>sqlite> 

	</p>
