// In this exercise we're going to use the return statement.
// -------------------------------------------------------------
/* Exercise Description: Checking if a number is big

We're going to write a function that checks if a number is bigger than 100.

1. create a function that has one parameter (argument)
2. think of good names for the function and the parameter
3. inside the function check the number
4. if the number is bigger than 100 use the return keyword to return true
5. if the number is 100 or smaller use the return keyword to return false
6. now we're going to check if the function works as we intended
7. call the function with different numbers
8. use console.log to display the return value of the function
9. the end result of this exercise should not use console.log inside of 
   the function

Now think about the categories of functions we discussed: functions 
that do something and functions that produce something. What kind of 
function is this? //-> this function does something (because it returns result of a comparison)
 */
console.log(`\n---------------Part 1 -  []---------------\n`);

const isBigger = function (number) {
  if (number > 100) {
    return true;
  } else if (number <= 100) {
    return false;
  }
};

console.log(isBigger(100)); // should be false
console.log(isBigger(101)); // should be true
console.log(isBigger(89)); // should be false
console.log(isBigger(340)); // should be true

console.log(`___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: Bouncer at a club

We're going to create an "AI" bouncer: Brenda the Bouncer Bot. 
Brenda will check that there aren't to many people in the club. 
She will also check the age of the people wanting to enter the club. 
Brenda will return one of three sentences:

    * "come in"
    * "it's too busy now, come back later"
    * "this is a club for adults"
To make these decisions we'll give Brenda the following arguments:

    * the maximum number of people in the club
    * the current number of people in the club
    * the age of the person wanting to enter the club

################################# Tip #####################################
    There are multiple ways to write this function. It's possible to use 
    one or multiple return statements. If you've created one version of 
    the function: can you think of another way to write it?
###########################################################################

1. create a function with the right number of parameters
2. think of good names for the function and the parameters
3. inside the function write the code that decides what Brenda should say
4. return Brenda's response
5. call the function multiple times with different arguments
6. make sure you see all of Brenda's different responses

Now think about the categories of functions we discussed: functions 
that do something and functions that produce something. What kind of 
function is this?  //-> this function produces an decision based on more requirements and return that.

*/

console.log(`\n---------------Part 2 - []---------------\n`);

const brendaTheBot = function (maxPeople, currentPeople, age) {
  if (currentPeople >= maxPeople) {
    return "it's too busy now, come back later";
  } else if (currentPeople < maxPeople) {
    if (age < 18) {
      return "this is a club for adults";
    } else {
      return "come in";
    }
  }
};

console.log(brendaTheBot(51, 50, 30));

console.log(`\n___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: Calculating the average

We're going to write a function that calculates the average of five numbers.
1. create a function with the right number of parameters
2. think of good names for the function and the parameters
3. inside the function calculate the average of the five numbers
4. bonus: use Math.round to round the average to a whole number
5. use the return keyword to return the average of the five numbers
6. call the function multiple times with different arguments
7. check that your function correctly calculates the average
8. use console.log to display the return value of the function
9. the end result of this exercise should not use console.log inside of the function

Now think about the categories of functions we discussed: functions that do something 
and functions that produce something. What kind of function is this?
//-> this function produces an average based on calculation on the received array.

*/

console.log(`\n---------------Part 3 - []---------------\n`);

const averageNumber = function (numArray) {
  const reducer = (accumulator, curr) => accumulator + curr;
  average = numArray.reduce(reducer) / numArray.length;
  return Math.round(average);
};

myNums1 = [4, 8, 7, 9, 5];
myNums2 = [10, 8, 7, 9, 6];
myNums3 = [5, 5, 6, 5, 8];
console.log(averageNumber(myNums1));
console.log(averageNumber(myNums2));
console.log(averageNumber(myNums3));

console.log(`___________________End Part 3 ____________________`);
// ---------------------------------------------------------------------------
