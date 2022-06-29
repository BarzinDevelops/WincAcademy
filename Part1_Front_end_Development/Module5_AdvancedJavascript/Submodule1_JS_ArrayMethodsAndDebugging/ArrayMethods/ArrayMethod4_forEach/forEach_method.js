/* Definition and Usage
The forEach() method calls a function for each element in an array.
The forEach() method is not executed for empty elements.

Syntax:
-------
array.forEach(function(currentValue, index, arr), thisValue)

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
undefined

*/

const fruits = ['watermelon', 'mango', 'guava', 'banana', 'strawberry'];
myFruit = 'mango';
fruits.forEach((fruit)=>{
    if(fruit === myFruit){
        console.log(`YEAAAAAA your fruit is same as this fruit: ${fruit} 🍓🫐🍎🍍🍌🍐`);
    }else console.log(`your fruit was: ${myFruit} but this fruit -> '${fruit}', does NOT match!!`);
})
console.log(`All the items in fruits array: ${fruits}`)




