# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# ----- Adding additional test variables:
num4 = '13'
# Expected output: '13 is odd'
num5 = '64'
# Expected output: '64 is even'

# ----- FUNCTION INFO
# -- input: number
# -- output: a string, using string interpolation to state that the number is even or odd.
#
# ----- STEPS:
# -- 1. Create a function called even_or_odd which will accept a param of num.
# -- 2. Convert the input number to an integer, just in case a string is entered.
# -- 3. Use a conditional statement & the methods .even? and .odd? to determine if a number is even or odd.
# -- 4. Use string interpolation to print a sentence to the terminal which tells the user if the number is even or odd.


def even_or_odd(num)
  if num.to_i.even?
   p "#{num} is even."
  elsif num.to_i.odd?
   p "#{num} is odd."
  else
    p "Oops, something went wrong..."
  end
end

even_or_odd(num1) #output: "7 is odd."
even_or_odd(num2) #output: "42 is even."
even_or_odd(num3) #output: "221 is odd."
even_or_odd(num4) #output: "13 is odd."
even_or_odd(num5) #output: "64 is even."



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# ----- FUNCTION INFO
# -- input: string
# -- output: a string, with all vowels removed
#
# ----- STEPS:
# -- 1. Create a function called delete_vowel which will accept a param of str.
# -- 2. Store the result of using .delete in a temporary variable to remove all instances of lowercase vowels.
# -- 3. Print the temporary variable after using .delete a second time to catch all insteances of uppercase vowels.


def delete_vowel(str)
 temp_str = str.delete('aeiou')
 p temp_str.delete('AEIOU')
end

delete_vowel(beatles_album1) #output: "Rbbr Sl"
delete_vowel(beatles_album2) #output: "Sgt Pppr"
delete_vowel(beatles_album3) #output: "bby Rd"

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# ----- FUNCTION INFO
# -- input: string
# -- output: a sentence using string interpolation to state whether or not the string is a palindrome
#
# ----- STEPS:
# -- 1. Create a function called check_palindrome which will accept a param of str.
# -- 2. Use a conditional statement, combined with .downcase to ensure that casing won't cause a false negative, to compare the string with its reversed self.
# -- 3. Print a sentence to the console using string interpolation to tell the user if the string is a palindrome or not.

def check_palindrome(str)
  if str.downcase == str.downcase.reverse
    p "#{str} is a palindrome."
  elsif str.downcase != str.downcase.reverse
    p "#{str} is NOT a palindrome."
  else
    p "Oops, something went wrong..."
  end
end

check_palindrome(palindrome_tester1) #output: "Racecar is a palindrome."
check_palindrome(palindrome_tester2) #output: "LEARN is NOT a palindrome."
check_palindrome(palindrome_tester3) #output: "Rotator is a palindrome."