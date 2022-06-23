/* Definition and Usage
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.

Syntax:
-------
array.map(function(currentValue, index, arr), thisValue)

Parameters:
----------
Parameter	    Description
--------        -----------
function()	    Required. A function to run for each array element.
currentValue	Required. The value of the current element.
index	        Optional. The index of the current element.
arr	            Optional. The array of the current element.
thisValue	    Optional. Default undefined. A value passed to the function as its this value.

Return Value:
-------------
An array	The results of a function for each array element.
*/


console.log(`In de onderstaande script wordt de wortel berekend van iedere nummer in 'numbers' array, door gebruik van de map() array-method.`)

const numbers = [4, 9, 16, 25];
const square_rooted = numbers.map((num)=>{
    return Math.sqrt(num)
})
console.log(`De nummers die nu in deze array zitten zijn: ${numbers}`)
console.log(`Wortel van die nummers zijn nu: ${square_rooted}`);



