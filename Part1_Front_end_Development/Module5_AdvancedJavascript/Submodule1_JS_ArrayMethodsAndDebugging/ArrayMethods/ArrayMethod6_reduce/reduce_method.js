/* Definition and Usage
The some() method checks if any array elements pass a test (provided as a callback function).
The some() method executes the callback function once for each array element.
The some() method returns true (and stops) if the function returns true for one of the array elements.
The some() method returns false if the function returns false for all of the array elements.
The some() method does not execute the function for empty array elements.

The some() method does not change the original array.

Syntax:
-------
array.some(function(value, index, arr), this)

Parameters:
----------
Parameter	    Description
--------        -----------
function()	    Required. A function to run for each array element.
currentValue	Required. The value of the current element.
index	        Optional. The index of the current element.
arr	            Optional. The array of the current element.
this	        Optional. Default undefined. A value passed to the function to be used as its "this" value.

Return Value:
-------------
A boolean	true if any of the array elements pass the test, otherwise false.

*/

const ages = [3, 10, 18, 20];

console.log(`Is there anyone above 18 years old? => ${ages.some(checkAdult)}`);

function checkAdult(age) {
  return age > 18;
}