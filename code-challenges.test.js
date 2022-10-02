// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("del1Shuffle", () => {
  it(`Takes in an array, removes the first item from the array and shuffles the remaining content.`, () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];

    const colors2 = [
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron",
    ];

    expect(del1Shuffle(colors1)).toEqual(
      expect.arrayContaining(["yellow", "blue", "pink", "green"])
    );
    expect(del1Shuffle(colors2)).toEqual(
      expect.arrayContaining([
        "saffron",
        "aquamarine",
        "periwinkle",
        "indigo",
        "ochre",
      ])
    );
  });
});

// GOOD FAIL: del1Shuffle is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an array, then remove the element at its 0th index, and shuffle.
Function Name: del1Shuffle
Function Parameter(s): 1, array
--------- INPUT / OUTPUT:
input 1: array
output 1: a copy of the original array, w/the 0th index removed and then shuffled
--------- STEPS/METHODS:
RESEARCH PHASE: I knew I was going to need to use Math.floor, and I knew that I was going to need to iterate over the array, but I decided to do some research before jumping into this one. I found multiple ways of accomplishing this, and decided to go for something called the 'Fisher-Yates' algorithm. The Fisher-Yates shuffle works by essentially randomly drawing elements to place into the indexes of the array until there are no empty indexes left.

1. Remove the first value from the array using .shift().
2. Set up a for loop to start looping through the elements, starting with the last elemenent and working backwards.
3. Use Math.Floor and Math.Random to create and store a random index, which will never be higher than the current index.
4. Store the value of the CURRENT index in a temporary array which can be used to reassign it to the random index.
5. Swap around the values.
6. Return the new, shuffled array.
*/

const del1Shuffle = (arr) => {
  // Removing the first item in the Array.
  arr.shift();
  // Setting up a for loop, working BACKWARDS through the array.
  for (let i = arr.length - 1; i > 0; i--) {
    // Storing a random index value in r, which is calculated based off Math.floor and the current possible indexes.
    const r = Math.floor(Math.random() * (i + 1));
    // Storing the current index to a variable.
    const temp = arr[i];
    // Resetting the current index to the random index.
    arr[i] = arr[r];
    // Assigning the random index back to our temporary variable.
    arr[r] = temp;
  }
  return arr;
};

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

describe("netVotes", () => {
  it(`Takes in an object that contains up votes and down votes and returns the net total of votes.`, () => {
    const votes1 = { upVotes: 13, downVotes: 2 };

    const votes2 = { upVotes: 2, downVotes: 33 };

    expect(netVotes(votes1)).toEqual(11);
    expect(netVotes(votes2)).toEqual(-31);
  });
});

// GOOD FAIL: netVotes is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in an object, access its values, then subtract them to return the net total.
Function Name: netVotes
Function Parameter(s): 1, object
--------- INPUT / OUTPUT:
input 1: Object
output 1: Number

--------- STEPS/METHODS:
1. Create a temporary array to store the values using Object.values on the array.
2. Using bracket notation to access the array data, subtract the first value from the second to get the net total.
3. Return the net total.
*/

const netVotes = (obj) => {
  //Temporarily storing values from the object in an array
  let tempArr = Object.values(obj);
  // Subtracting upVotes from downVotes.
  return tempArr[0] - tempArr[1];
};

// I'm very slightly hard-coding this one, under the assumption that there will only ever be two values that I'm accounting for. However, I think using Object.values is good, since I don't necessarily know what the keys are going to be. I could also do the same thing using dot notation:

// const netVotes = (obj) => {
//   return obj.upVotes - obj.downVotes;
// };

//...But I like my first function better, so I'm going to leave it as is!

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("removeDupes", () => {
  it(`Takes in two arrays as arguments and returns one array with no duplicate values.`, () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];

    expect(removeDupes(dataArray1, dataArray2)).toEqual([
      "array",
      "object",
      "number",
      "string",
      "Boolean",
      "null",
      "undefined",
    ]);
  });
});

// GOOD FAIL: removeDupes is not defined

// b) Create the function that makes the test pass.
/*
--------- FUNCTION INFORMATION:
Describe what the function will do: Function will take in two arrays, then combine them with no duplicate elements.
Function Name: removeDupes
Function Parameter(s): 2, both arrays
--------- INPUT / OUTPUT:
input 1: array
input 2: array

output: a new array, with no duplicates
--------- STEPS/METHODS:
1. Declare a function called removeDupes that will accept 2 params of arrays.
2. I've used Array.from in the past, and with a little bit of research I've found that I can use it here to create a new array from my existing arrays.
3. With more research, I've found out about something called a Set in JS. Sets are a collection of unique values, meaning that a value can only occur ONCE in a Set. So, I'm going to use new Set in my Array.from method in order to weed out any duplicates.
4. Use the return keyword in front of the method in order to return the new array.
*/

// const removeDupes = (arr1, arr2) => {
//   return Array.from(new Set(arr1.concat(arr2)));
// };

// This method works entirely because of JS Sets, which do not allow duplicates by default. However, with some more research for the stretch goal, I can actually accomplish the same thing with the spread operator instead of Array.from like this:

const removeDupes = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

//It works VERY similarly to my solution above, but looks a little cleaner, so I think I'm going to leave this one uncommented!
