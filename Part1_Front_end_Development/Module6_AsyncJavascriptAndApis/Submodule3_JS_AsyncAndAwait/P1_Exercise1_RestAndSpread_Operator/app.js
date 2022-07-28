const log = console.log;

// Exercise: Rest Parameter and Spread Operator
// You are going to write 2 functions.

/*Function 1: Write a simple function that adds multiple numbers together
            The function accepts multiple arguments
            Use the rest parameter to make sure your function treats arguments as an array.

// Solution to Function1:
const addNum = (...numbers) =>{
    return numbers.reduce((prev, curr)=> prev + curr);
}

log(addNum(5,7,3,15,2,18,33)); */







/*Function 2: Write a simple function that adds multiple numbers together
            The function takes 1 argument, which is an array of numbers
            Use the spread operator to make sure your function sums up all items in the array. 

*/

//Implementatie met gebruik van Rest operator als function parameter:  
const addNumUsingSpread = (...nums) => nums.reduce((prev, curr)=> prev + curr);
  
  const numbers = [1, 2, 3, 13, 11];
  console.log(addNumUsingSpread(...numbers));
  console.log(addNumUsingSpread(22,33,12,8)); 
