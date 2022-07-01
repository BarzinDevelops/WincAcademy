/* Exercise: Array methods - part 2

For each of the exercises below, you need one of the array methods below. 
To solve the puzzle, you first need the test data. 
There are several possible solutions for 1 problem.

[ ] .find method
[ ] .forEach method
[ ] .some method
[ ] .every method
[ ] .includes method
------------------------------------------
The next 3 methods are a bit advanced. 
There are several exercises where you can use these functions. 
We're going to practice with it more later today:

[ ] .map method
[ ] .filter method
[ ] .reduce method
____________________________________________________________________________*/

//  START OF ASSIGNMENTS:
let result = null;  // will be used to store test results for each test

/*PART A:
 Write a JavaScript function that finds a certain item and returns 
it based on a certain value. 
Find the entire Spiderman object, based on the name "Spiderman". Use .find. */ 

/* Solution to PART A:
console.log(`\n===========================\n\tPart A:\n===========================\n`)

// Test dates:
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"},
    {name: "Superman", alter_ego: "Clark Kent"},
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
    // Here goes your function
     const findSpiderMan = heros =>{
      return heros.find(hero=>{
            // console.log(`item: ${item.name}`)
            return hero.name === "Spiderman"
        });
        
    }    

    console.log(findSpiderMan(superheroes))
    // Find Spiderman
    // result should be: {name: "Spiderman", alter_ego: "Peter Parker"}
    console.log(`\n===========================\n\tEND of Part A:\n===========================\n`)
*/

/*PART B:
In an array of integers. Make sure you return an array with the integers doubled. 
Use the .forEach method or, one level higher: the .map method. */

/* Solution to PART B:
console.log(`\n===========================\n\tPart B:\n===========================\n`)
// using forEach() to solve this:
const doubleArrayValues1 = function (array) {
    let newArr = [];
    array.forEach(function (num){
        newArr.push(num + num);
    });
    return newArr;
}
console.log(`Using .map method to double numbers in a array: `, doubleArrayValues1([1, 2, 3]));

// using shorthand .map() to solve this:
const doubleArrayValues2 = arr => {
    return arr.map(num => num * 2);
}
console.log(`\n------------------Shorthand notation using .map() -------------------\n
Using .map method to double numbers in a array: `, doubleArrayValues2([1, 2, 3]));
// result should be [2, 4, 6]
let test =  doubleArrayValues2([1, 2, 3]);
console.log("Type of returned map method: ", typeof test, test);

console.log(`\n===========================\n\tEND of Part B:\n===========================\n`)
 */

/*PART C:
In an array of integers. 
Write a JavaScript function that checks if there is a number (integer) in the array 
that is greater than 10. */

/* Solution to PART C: 
console.log(`\n===========================\n\tPart C:\n===========================\n`)
const containsNumberBiggerThan10 = arr =>{
    return arr.some(num => num > 10);
}
let result = null;
result = containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]);
console.log(`is there a number higher than 10 in this array [1, 4, 3, 6, 9, 7, 11]: `, result);

// result should be true
result = containsNumberBiggerThan10([1,2,1,2,1,2]);
console.log(`is there a number higher than 10 in this array [1,2,1,2,1,2]: `, result);
// result should be false

console.log(`\n===========================\n\tEND of Part C:\n===========================\n`)
*/

/*PART D:
In an array of strings. 
Write a JavaScript function that checks for a certain string: "Italy" in the array */

/* Solution to PART D: 
console.log(`\n===========================\n\tPart D:\n===========================\n`)

const isItalyInTheGreat7 = arr =>{
    return arr.includes('Italy', 3); //checks if italy is in the array starting at position 3
}

result = isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States']);
console.log(`is Italy in the array? : `, result);


// result should be true

console.log(`\n===========================\n\tEND of Part D:\n===========================\n`)
*/

/*PART E:
In an array of integers. 
Write a JavaScript function that will multiply every integer tenfold. Use .forEach. */

/* Solution to PART E: 
console.log(`\n===========================\n\tPart E:\n===========================\n`)

const tenfold = arr => {
    return arr.map(nr => nr * 10);
}
result = tenfold([1, 4, 3, 6, 9, 7, 11]);
console.log(`is every integer tenfold? : `, result);

// result should be [10, 40, 30, 60, 90, 70, 110]
console.log(`\n===========================\n\tEND of Part E:\n===========================\n`)
*/

/*PART F:
In an array of integers. 
Write a JavaScript function that checks if all values ​​in the array are below 100, 
and return True or False. */

/* Solution to PART F: 
console.log(`\n===========================\n\tPart F:\n===========================\n`)
const isBelow100 = arr => arr.every(nr => nr < 100);

result = isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]);
console.log(`Are all values in the array below 100? : `, result);
result = isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98]);
console.log(`Are all values in the array below 100? : `, result);
// result should be: false

console.log(`\n===========================\n\tEND of Part F:\n===========================\n`)
*/

/*PART G:
Bonus! The last exercise is a bit more challenging. 
Use Google and be a little rowdy (maybe copy a piece of code). 
In an array of integers. 
Write a JavaScript function that adds all the values in the array and returns the sum total. 
Use the .reduce method. And really, use Google. */

/* Solution to PART G:*/
console.log(`\n===========================\n\tPart G:\n===========================\n`)

let test;

const bigSum = arr => {
    return arr.reduce((tot, currVal)=>{ //after reduce is done, value save to "tot" gets returned
                // console.log(`tot: ${tot}`);
                // console.log(`currVal: ${currVal}`);
                return tot + currVal;  // this returns result of this addition to 'tot' 
            })
}

result = bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]);
console.log(`Sum total of array is: `, result);
// result should be 1118 


console.log(`\n===========================\n\tEND of Part G:\n===========================\n`)
