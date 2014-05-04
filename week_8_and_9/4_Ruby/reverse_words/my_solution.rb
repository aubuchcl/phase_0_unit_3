# U3.W8-9: Reverse Words


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution


# def reverse_words(sentence)
#   arr = sentence.split(" ")
#   arr.map!{|x| x.reverse}
#   sentence = arr.join(" ")
#   sentence
# end

# 4. Refactored Solution

def reverse_words(sentence)
  words = sentence.split(" ")
  words.map!{|x| x.reverse}
  words.join(" ")
end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE


def assert
  raise "Assert failed" unless yield
end
assert{reverse_words("Ich bin ein Berliner") == "hcI nib nie renilreB"}
assert{reverse_words("Hello") == "olleH"}
assert{reverse_words("racecar") == "racecar"}




# 5. Reflection 