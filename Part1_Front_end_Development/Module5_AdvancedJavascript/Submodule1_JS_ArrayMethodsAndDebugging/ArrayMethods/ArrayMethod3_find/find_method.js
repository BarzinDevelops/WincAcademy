/* Definition and Usage
The find() method returns the value of the first element that passes a test.
The find() method executes a function for each array element.
The find() method returns undefined if no elements are found.
The find() method does not execute the function for empty elements.
The find() method does not change the original array.

Syntax:
-------
array.find(function(currentValue, index, arr),thisValue)

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
An array	The value of the first element that pass the test. Otherwise it returns undefined.
*/




const ages = [4, 9, 26, 16, 25, 19, 33, 22];
let found_index
const found_age = ages.find((age, index)=>{
    found_index = index
    return age > 28
})
console.log(`Items in array 'ages': ${ages}`)
console.log(`value of the first element with a value over 18: 
                found index: ${found_index}
                found age: ${found_age}`);



