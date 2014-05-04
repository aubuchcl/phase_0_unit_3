/*
U3.W8-9: Gradebook from Names and Scores

You will work with the following two variables.  The first, students, holds the names of four students.  
The second, scores, holds groups of test scores.  The relative positions of elements within the two 
variables match (i.e., 'Joseph' is the first element in students; his scores are the first value in scores.).

Do not alter the students and scores code.

I worked on this challenge [by myself, with:]

*/

var students = ["Joseph", "Susan", "William", "Elizabeth"]

var scores = [ [80, 70, 70, 100],
               [85, 80, 90, 90],
               [75, 70, 80, 75],
               [100, 90, 95, 85] ]






// __________________________________________
// Write your code below.

// var average =  function(scores) {
//      avg = 0;
//     for (var x = 0; x < scores.length; x++)
//     {
//       avg = avg + scores[x];
//     }
//     avg = avg / scores.length;
//     return avg;
//   };


// var gradebook = {};


// var gradebook = {"Joseph": {},  "Susan": {}, "William": {}, "Elizabeth": {}, addScore: function(name, score){ if (name == "Joseph")
// {return gradebook.Joseph.testScores.push(score)}
// else if (name == "Susan")
// {return gradebook.Susan.testScores.push(score)}
// else if (name == "William")
// {return gradebook.William.testScores.push(score)}
// else if (name == "Elizabeth")
// {return gradebook.Elizabeth.testScores.push(score)}
// else
// {return "that is not an option"}
// }, getAverage: function(name){if (name == "Joseph")
// {return average(scores[0])}
// else if (name == "Susan")
// {return average(scores[1])}
// else if (name == "William")
// {return average(scores[2])}
// else if (name == "Elizabeth")
// {return average(scores[3])}
// else
// {print; "no return"}
// }};

// gradebook.Joseph = {testScores: scores[0]};
// gradebook.Susan = {testScores: scores[1]};
// gradebook.William = {testScores: scores[2]};
// gradebook.Elizabeth = {testScores: scores[3]};


// __________________________________________
// Refactored Solution


var average =  function(scores) {
     avg = 0;
    for (var x = 0; x < scores.length; x++)
    {
      avg = avg + scores[x];
    }
    avg = avg / scores.length;
    return avg;
  };

var gradebook = {"Joseph": {testScores: scores[0]},  "Susan": {testScores: scores[1]}, "William": {testScores: scores[2]}, "Elizabeth": {testScores: scores[3]}, addScore: function(name, score){ if (name == "Joseph")
{return gradebook.Joseph.testScores.push(score)}
else if (name == "Susan")
{return gradebook.Susan.testScores.push(score)}
else if (name == "William")
{return gradebook.William.testScores.push(score)}
else if (name == "Elizabeth")
{return gradebook.Elizabeth.testScores.push(score)}
else
{return "that is not an option"}
}, getAverage: function(name){if (name == "Joseph")
{return average(scores[0])}
else if (name == "Susan")
{return average(scores[1])}
else if (name == "William")
{return average(scores[2])}
else if (name == "Elizabeth")
{return average(scores[3])}
else
{print; "no return"}
}};





// __________________________________________
// Reflect
// My strategy was not to get overwhelmed with synatx change from ruby and I may have failed for a few mins at a time.  I faced problems with where to put certain ids such as function and {}.
// I had lots of qeustions while coding.  Most of which I solved from the listed resource and w3 schools website.
// Not really having any problems with concepts just execution.
// Learned a lot about how to structure things in javascript and not to type in java when serching for javascript in google
// I am relativly confident in what I did.
// I enjoyed revisiting javascript
// It was also tedious.








// __________________________________________
// Driver Code:  Do not alter code below this line.


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (average instanceof Function),
  "The value of average should be a Function.\n",
  "1. "
)

assert(
  average([1, 2, 3]) === 2,
  "average should return the average of the elements in the array argument.\n",
  "2. "
)

assert(
  (gradebook instanceof Object),
  "The value of gradebook should be an Object.\n",
  "3. "
)

assert(
  (gradebook["Elizabeth"] instanceof Object),
  "gradebook's Elizabeth property should be an object.",
  "4. "
)

assert(
  (gradebook.William.testScores === scores[2]),
  "William's testScores should equal the third element in scores.",
  "5. "
)

assert(
  (gradebook.addScore instanceof Function),
  "The value of gradebook's addScore property should be a Function.",
  "6. "
)

gradebook.addScore("Susan", 80)

assert(
  (gradebook.Susan.testScores.length === 5
   && gradebook.Susan.testScores[4] === 80),
  "Susan's testScores should have a new score of 80 added to the end.",
  "7. "
)

assert(
  (gradebook.getAverage instanceof Function),
  "The value of gradebook's getAverage property should be a Function.",
  "8. "
)

assert(
  (gradebook.getAverage("Joseph") === 80),
  "gradebook's getAverage should return 80 if passed 'Jospeh'.",
  "9. "
)