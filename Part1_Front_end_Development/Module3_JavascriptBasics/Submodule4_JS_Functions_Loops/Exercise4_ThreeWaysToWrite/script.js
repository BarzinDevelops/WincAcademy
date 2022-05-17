/* Exercise Description: Functions: three ways to write them: exercise
In this exercise we're going to write a single function in three styles.
The function we're going to create will do the following.

    * take two numbers
    * each number will be squared (multiplied with itself)
    * the squared numbers will be added together
    * this sum will be squared again
    * the resulting value is returned

Write this function in all three styles and give the functions and their arguments good names. 
They cannot have exactly the same name. There are multiple ways to do this.

    * function declaration
    * function expression
    * arrow function

After you're done, check that all three functions give the same result if 
you give them the same arguments.77
 */
console.log(`\n---------------Part 1 - function declaration ---------------\n`);

/* function squaredNums1(num1, num2) {
  squaredNum1 = num1 ** 2;
  squaredNum2 = num2 ** 2;
  totalSquaredNums = squaredNum1 + squaredNum2;
  squaredSum = totalSquaredNums ** 2;
  return squaredSum;
}
console.log(squaredNums1(5, 10)); */

//-----------------------------------
// shorter version and using helper method:
function square1(num) {
  //helper method to get calculate squaring part
  return num ** 2;
}
function squaredNums1(num1, num2) {
  return square1(square1(num1) + square1(num2));
}
console.log(squaredNums1(5, 10));

console.log(`___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------

console.log(`\n---------------Part 2 - function Expression---------------\n`);

/* const squaredNums2 = function (num1, num2) {
  squaredNum1 = num1 ** 2;
  squaredNum2 = num2 ** 2;
  totalSquaredNums = squaredNum1 + squaredNum2;
  squaredSum = totalSquaredNums ** 2;
  return squaredSum;
};
console.log(squaredNums2(5, 10)); */
//-----------------------------------
// shorter version and using helper method:

const square2 = function (num) {
  return num ** 2; //helper method to get calculate squaring part
};
const squaredNums2 = function (num1, num2) {
  return square2(square2(num1) + square2(num2));
};

console.log(squaredNums2(5, 10));

console.log(`___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------

console.log(`\n---------------Part 3 - Arrow Function---------------\n`);

/* const squaredNums3 = (num1, num2) => {
  squaredNum1 = num1 ** 2;
  squaredNum2 = num2 ** 2;
  totalSquaredNums = squaredNum1 + squaredNum2;
  squaredSum = totalSquaredNums ** 2;
  return squaredSum;
};
console.log(squaredNums3(5, 10)); */
//-----------------------------------
// shorter version and using helper method:
const square3 = (num) => num ** 2; //helper method to get calculate squaring part

const squaredNums3 = (num1, num2) => square3(square3(num1) + square3(num2)); //arrow functions dont need return keyword

console.log(squaredNums3(5, 10));

console.log(`___________________End Part 3 ____________________`);
// ---------------------------------------------------------------------------
