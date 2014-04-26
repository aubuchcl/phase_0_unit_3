# U3.W7: Modeling a Real-World Database (SOLO CHALLENGE)

## Release 0: Users Fields
They collect a username, language pref, email, timezone, country, and preference for your archive.

## Release 1: Tweet Fields
id(as it relates to username) text, photo(optional), location(optional), date/time

## Release 2: Explain the relationship
The relationship between `users` and `tweets` is: 
The main relation between the two lies in the username and its output.  The users information is attached to each tweet and then the user selects the additional components that he/she wants to include.

## Release 3: Schema Design
![not working](https://github.com/aubuchcl/phase_0_unit_3/raw/master/week_7/imgs/twitter.png)

## Release 4: SQL 


all the tweets for a certain user id

```SELECT * FROM Tweet
 		WHERE id = 'desired_user' ```

the tweets for a certain user id that were made after last Wednesday (whenever last Wednesday was for you)

```SELECT * FROM Tweet
		WHERE date > 14-04-23 00:00:00.000
		AND id = 'desired_user'
```

all the tweets associated with a given user's twitter handle

```SELECT Tweet.text FROM Tweet JOIN Account
		ON (Tweet.id = Account.username)
		WHERE Account.username = 'handle'
```	


the twitter handle associated with a given tweet id


```SELECT Account.username FROM Account JOIN Tweet
		ON (Account.username = Tweet.id)
		WHERE Tweet.id = Account.username
```
 

## Release 5: Reflection

What parts of your strategy worked? What problems did you face?  The main problem I faced was trying to decide exactly what was going to be included/excluded.  Twitters database of information has to be enormous.  They probably have more information on me than I purposly gave them / edward snowden/ etc.  So I had to decided to follow the prompted fields and work from there.            
What questions did you have while coding? What resources did you find to help you answer them?      I had qeustions about how to inject code into markdown and I just googled it.  It was basically the first result.                  
What concepts are you having trouble with, or did you just figure something out? If so, what?     How to I write driver code for sql statements to see if they are correct?         
Did you learn any new skills or tricks?
  How to inject code into markdown.               
How confident are you with each of the Learning Competencies?
     Relatively
Which parts of the challenge did you enjoy?
   Looking at the information on twitter and modeling it.
Which parts of the challenge did you find tedious?
   sql without driver.
