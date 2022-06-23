/* Definition and Usage
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array. 

Syntax:
-------
array.filter(function(currentValue, index, arr), thisValue)

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
An array	Containing the elements that pass the test.
            If no elements pass the test it returns an empty array.
*/

const ages = [19, 18, 16, 12, 17, 8, 39, 37, 33, 57, 28];
const result = ages.filter((age) =>{
    
    return age >= 18;
})

console.log(`typeof(result) -> ${typeof(result)}`);
console.log(result);