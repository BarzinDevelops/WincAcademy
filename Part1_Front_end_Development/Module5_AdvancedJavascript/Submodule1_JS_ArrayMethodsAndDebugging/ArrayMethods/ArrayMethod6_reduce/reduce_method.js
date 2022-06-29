/* Definition and Usage   (NO MUTATION)
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.

The reduce() method does not change the original array.

Syntax:
-------
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

Parameters:
----------
Parameter	    Description
--------        -----------
function()	    Required. A function to run for each array element.
total           Required. The initialValue, or the previously returned value of the function.
currentValue	  Required. The value of the current element.
currentIndex    Optional. The index of the current element.
arr	            Optional. The array the current element belongs to.

Return Value:
-------------
The accumulated result from the last call of the callback function.      
------------------------------------------------------------------------------*/

//Example 1: Subtract all numbers in an array:
/* const numbers = [175, 50, 25];

console.log(`numbers.reduce(myFunc) should result in 100 (175-50-25 = 100) => ${numbers.reduce(myFunc)}`);

function myFunc(total, num) {
  return total - num;
}
 */


//Example 2: Round all the numbers and display the sum:

const myNumbers = [15.5, 2.3, 1.1, 4.7];
// document.getElementById("demo").innerHTML = myNumbers.reduce(getSum, 0);
console.log(`result should be: 24 => ${myNumbers.reduce(getSum, 0)}`);
console.log(`result should be: 24 => ${myNumbers.reduce(getSum)}`);

function getSum(total, num) {
  // console.log(`num before rounding: ${num}  //--> testing
  // num after rounding: ${Math.round(num)}
  // value of total: ${total}`);

  return total + Math.round(num);
}