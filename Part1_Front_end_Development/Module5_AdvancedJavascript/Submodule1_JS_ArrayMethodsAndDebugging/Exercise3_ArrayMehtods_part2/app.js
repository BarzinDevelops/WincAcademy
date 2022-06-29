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
____________________________________________________________________________
*/

/*
A) Write a JavaScript function that finds a certain item and returns 
it based on a certain value. 
Find the entire Spiderman object, based on the name "Spiderman". Use .find. 
 */
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