/* Definition and Usage   (NO MUTATION)
The every() method executes a function for each array element.
The every() method returns true if the function returns true for all elements.
The every() method returns false if the function returns false for one element.
The every() method does not execute the function for empty elements.

The every() method does not change the original array

Syntax:
-------
array.every(function(currentValue, index, arr), thisValue)

Parameters:
----------
Parameter	    Description
--------        -----------
function()	    Required. A function to run for each array element.
currentValue	  Required. The value of the current element.
index	          Optional. The index of the current element.
arr	            Optional. The array of the current element.
thisValue       Optional. Default undefined. A value passed to the function as its this value.

Return Value:
-------------
A boolean	      true if all elements pass the test, otherwise false.

*/

const ages = [32, 33, 19, 40];

console.log(`Is there anyone above 18 years old? => ${ages.every(checkAdult)}`);

function checkAdult(age) {
  return age > 18;
}