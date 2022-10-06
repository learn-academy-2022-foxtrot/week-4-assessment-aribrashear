# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: In object-oriented programming, most (if not all) things in your code will revolve around objects and classes, whereas functional programming relies more on variables and functions. I'm most familiar with object-oriented programming, as the languages I've currently learned (Javascript and Ruby) are both object-oriented. I know that object-oriented programming is a lot more user-friendly, as we can call upon pre-set methods to perform CRUD actions on our data that are only able to exist because they're working within an Object.

Researched answer: In addition to my previous response, Object-Oriented programming focuses on data structures that can be mutated, while Functional programming focuses on immutable data. This is because Functional Programming is primarily concerned with an input and an output, which means it has no need for mutatatable data. Functional programming also allows the code to perform actions in your code in any order that you define, whereas Object-Oriented programming is run sequentially. This is because, in functional programming, functions are independent and do not require a specific order to work correctly.

2. What is the difference between a Float and an Integer in Ruby?

Your answer: In ruby, a float is a number that will include decimal points, while an integer is a whole number. This is important because Ruby will not automatically handle ANY kind of type coercion, so if you're trying to use mathematical equations on whole numbers that will result in a decimal, it's going to round them up to the nearest whole number. To get the correct output for an equation that would be expecting a decimal, you need to turn one of the numbers in that equation into a float, like so:

--This is what ruby would output by default.
10 / 4 = 2

--This is the correct output, using floats.
10 / 4.0 = 2.5

Researched answer: In addition to my previous response, a 'float' is referring to a 'floating-point number', which is a fancy word for a number that has a decimal place. Any other number is considered an integer.

3. Ruby has an implicit return. What does that mean?

Your answer: In coding, an implicit return means that you don't need any kind of 'return' keyword, because the program is already expecting a return by default. We often see this behavior when we use methods on a single line, like when using .map(). For example:

const myArray = [1, 2, 3, 4, 5]
myArray.map((v) => v + 1) --> output: [2, 3, 4, 5, 6]

Even though we haven't told the method to return anything, it's still a working line of code and will produce the output above. That's implicit return in action!

Researched answer: In addition to my previous answer, in a language like Javascript, use of curly braces will indicate to your code that something will NOT have an implicit return. The curly braces indicate that you're going to be running multiple lines of code, and will then need to tell the program when to return something.

4. What is a block in Ruby?

Your answer: A block in ruby is used when a method needs an additional argument, and will look something like this:

// Creating a new array
num_arr = [1, 2, 3, 4, 5]
// Using map to add one to each value, and using a block to add that argument
num_arr.map do |val|
val + 1
end

So, in the above example, everything from 'do' to 'end' is a Ruby block. Essentially, they are acting as an anonymous function that works similarly to how HOF's do in Javascript.

Researched answer: In addition to my previous answer, it's good to note that implicit return in Ruby is handled on the last line. So, when you're making a block, you want to be sure to put your expected return on the last line of code.

1. How do you extract a value in a Ruby hash?

Your answer: In order to extract value from a Ruby hash, you would use bracket notation with the name of the key holding the value you want to access. For example:

// Setting up a new ruby hash
pet_info = { name: 'Hazel', species: 'cat', age: 3}

//Accessing just the name:
pet_info[:name] --> output: 'Hazel'

Also, it's important to make sure you don't forget to use the colon before the name of the key you're trying to access in the brackets!

Researched answer: In addititon to my previous answer, you can also reassign the value of a key by using this same access method. It would look something like this:

pet_info[:name] = "Daisy"

## Looking Ahead: Terms for Next Week

1. PostgreSQL: PostgreSQL is a database management system, which is used for storing large amounts of data.

2. Ruby on Rails: Ruby on Rails is a framework for the programming langauge Ruby, which is primarily used to build applications.

3. ORM: ORM stands for Object-Relational Mapping, and is used to access and manipulate objects without needing to account for how those objects relate to their data source(s).

4. Active Record: Active Record in Ruby on Rails is an ORM which runs between your code and your database.

5. Migrations: Migrations are a way to change your database over time in Ruby on Rails.
