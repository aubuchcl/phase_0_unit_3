# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode
#  def fizzbuzzed array as new array
#  iterate through parameter
#  set if else to 15, 5, and 3, as not to give a fizzbuzz value a fizz or buzz value
#  refactor



# 3. Initial Solution

# def super_fizzbuzz(array)
# 	fizzbuzz = []
# 	array.each do |x|
# 		if x % 15 == 0
# 			fizzbuzz << "fizzbuzz"
# 		elsif x % 5 == 0
# 			fizzbuzz << "buzz"
# 		elsif x % 3 == 0
# 			fizzbuzz << "fizz"
# 		else
# 			fizzbuzz << x
# 		end
# 	end
# fizzbuzz
# end



# 4. Refactored Solution
def super_fizzbuzz(array)
	fizzbuzz = []
	array.each do |element|
		if element % 15 == 0
			fizzbuzz << "FizzBuzz"
		elsif element % 5 == 0
			fizzbuzz << "Buzz"
		elsif element % 3 == 0
			fizzbuzz << "Fizz"
		else
			fizzbuzz << element
		end
	end
fizzbuzz
end





# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE
puts super_fizzbuzz([30, 9, 20, 1])
super_fizzbuzz([1,2,3])  # => [1, 2, "Fizz"]
super_fizzbuzz([1,2,5])  # => [1, 2, "Buzz"]
super_fizzbuzz([1,2,15]) # => [1, 2, "FizzBuzz"]
def assert
	raise "assertion failed" unless yield
end

assert {test = [30, 9, 20, 1]
				super_fizzbuzz(test) == ['fizzbuzz', 'fizz', 'buzz', 1]}




# 5. Reflection 


# What parts of your strategy worked? What problems did you face?
  # I worked through this problem pretty methodically, and faced no problems. 
# What questions did you have while coding? What resources did you find to help you answer them?
  # I didn't have any questions when coding this challenge.
# What concepts are you having trouble with, or did you just figure something out? If so, what?
  # Nothing on this challenge.
# Did you learn any new skills or tricks?
	# No but I did refresh my assert skills.
# How confident are you with each of the Learning Competencies?
  # very
# Which parts of the challenge did you enjoy?
	# finishing quickly with few questions made me feel good.
# Which parts of the challenge did you find tedious?
 #none

