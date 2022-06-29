/* Definition and Usage
The includes() method returns true if a string contains a specified string.
Otherwise it returns false.
The includes() method is case sensitive.

Syntax:
-------
string.includes(searchvalue, start)

Parameters:
----------
Parameter	    Description
--------        -----------
searchvalue	    Required. The string to search for.
start	          Optional. The position to start from. Default value is 0.

Return Value:
-------------
A boolean	      true if the string contains the value, otherwise false.

*/

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);

console.log(`text variable contains the word:'world' starting from 1th position? => ${text.includes('world', 1)}`);
console.log(`text variable contains the word:'welcome' starting from 12th position? => ${text.includes('welcome', 12)}`);
console.log(`text variable contains the word:'universe' starting from 29th position? => ${text.includes('universe', 29)}`);
