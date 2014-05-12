// U3.W8-9: Challenge you're converting


// I worked on this challenge [by myself, with: ].


// class GuessingGame
//   def initialize(answer)
//     @answer = answer
//   end
//   def guess(guess)
//   @guess = guess
//   if @guess > @answer then return :high
//   end
//   if @guess == @answer then return :correct
//   end
//   if @guess < @answer then return :low
//   end
//   end
//   def solved?
//   if @guess == @answer
//   true
//   else
//   false
//   end
//   end
 
 
// end
// 2. Pseudocode
def object guessingGame as a variable
make the function guess 
make that funciton part of the object guessingGame
this function will return hi , low , or correct
it will only return correct if solved == true
def function solved
this function will return true or false based on the relationship of the guess to the random number generated

// if guessingGame.guess > guess 
// 		console.log( "High")
// 	else if guessingGame.guess < guess
// 		console.log( "Low")	
// 	else if guessingGame.guess == guess
// 		console.log("Correct")
// 	else
// 		console.log("Could not Compute")


// 3. Initial Solution

// answer = Math.floor(Math.random() * 100 + 1)

// var guessingGame = {}
// guessingGame = {guess: function guess(guess){
// 	if (guess > answer)
// 		console.log("High")
// 	else if (guess < answer)
// 		console.log("Low")
// 	else if (guess === answer)
// 		console.log("Correct")
// 	else
// 		console.log("cannot compute")
// }

// guessingGame = {solved: function solved(guess){
// 	return guess === answer? true : false
// }}







// 4. Refactored Solution

answer = Math.floor(Math.random() * 100 + 1)

var guessingGame = {guess: function guess(guess){
	if (guess > answer)
		console.log("High")
	else if (guess < answer)
		console.log("Low")
	else if (guess === answer)
		console.log("Correct")
	else
		console.log("cannot compute")
}, solved: function solved(guess){
	return guess === answer? true : false}
}}





// 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
// game = GuessingGame.new rand(100)
// last_guess = nil
// last_result = nil

// until game.solved?
//   unless last_guess.nil?
//     puts "Oops! Your last guess (#{last_guess}) was #{last_result}."
//     puts ""
//   end

//   print "Enter your guess: "
//   last_guess = gets.chomp.to_i
//   last_result = game.guess(last_guess)
// end

// puts "#{last_guess} was correct!"

function assert(test, message, test_number)
if(!test){
	console.log(test_number + "false")
	throw "ERROR: " + message;
}
console.log(test)number + "true");
return true;}
}



// 5. Reflection 

I enjoyed transforming the ruby to script.  It reminded me of how much I like ruby.  I feel like when I use ruby I can easily navigate my goals and have the tools in memory to complete the challenges.  When I switch to script I have a harder time trying to remember what goes where and how to use the different tools that are available to the language.  I learned on this assignment, how to use asserts in script.