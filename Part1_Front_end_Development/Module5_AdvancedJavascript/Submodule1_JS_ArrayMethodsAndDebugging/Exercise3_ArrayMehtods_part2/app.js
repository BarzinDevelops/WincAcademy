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

/*PART A:
 Write a JavaScript function that finds a certain item and returns 
it based on a certain value. 
Find the entire Spiderman object, based on the name "Spiderman". Use .find. */ 

/* Solution to PART A:
console.log(`--------------------
Part A:
------------------`)

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
*/
//-----------------------------------------------------------------------------------

// TO DOOOOOOOOOOOOOOOOO 30-jun-2022

/*PART B:
In an array of integers. Make sure you return an array with the integers doubled. 
Use the .forEach method or, one level higher: the .map method. */

/* Solution to PART B: */
console.log(`--------------------
Part B:
------------------`)

doubleArrayValues([1, 2, 3])
// result should be [2, 4, 6]


/*PART C:
In an array of integers. 
Write a JavaScript function that checks if there is a number (integer) in the array 
that is greater than 10. */

/* Solution to PART C: 
console.log(`--------------------
Part C:
------------------`)
containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
// result should be true
containsNumberBiggerThan10([1,2,1,2,1,2]})
// result should be false
*/


/*PART D:
In an array of strings. 
Write a JavaScript function that checks for a certain string: "Italy" in the array */

/* Solution to PART D: 
console.log(`--------------------
Part D:
------------------`)
isItalyInTheGreat7(['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'])
// result should be true
*/


/*PART E:
In an array of integers. 
Write a JavaScript function that will multiply every integer tenfold. Use .forEach. */

/* Solution to PART E: 
console.log(`--------------------
Part E:
------------------`)
console.log(tenfold([1, 4, 3, 6, 9, 7, 11]))
// result should be [10, 40, 30, 60, 90, 70, 110]
*/



/*PART F:
In an array of integers. 
Write a JavaScript function that checks if all values ​​in the array are below 100, 
and return True or False. */

/* Solution to PART F: 
console.log(`--------------------
Part F:
------------------`)
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ]))
// result should be: false
*/

/*PART G:
Bonus! The last exercise is a bit more challenging. 
Use Google and be a little rowdy (maybe copy a piece of code). 
In an array of integers. 
Write a JavaScript function that adds all the values in the array and returns the sum total. 
Use the .reduce method. And really, use Google. */

/* Solution to PART G:
console.log(`--------------------
Part G:
------------------`)
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118 

*/