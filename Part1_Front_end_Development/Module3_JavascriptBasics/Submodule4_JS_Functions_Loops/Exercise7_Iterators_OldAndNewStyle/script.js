/* Exercise Description: Old style: loops

Loops can be used for more than just iterating over a list of things. 
But we are now talking about that way of using loops.
Create a new folder and a new JavaScript file.
Create an array called colors with the colors: yellow, blue, red, orange.
Write a while loop that logs the colors in the console and stops when all colors are printed.
 */
console.log(`\n---------------Part 1 -  While loop:---------------\n`);
colors = ["yellow", "blue", "red", "orange"];

let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}
console.log(`___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description:  For loop

Use the same array as the starting point.
Write a for loop that logs the colors in the console and stops when all colors are printed.
Use the length of the array in your for loop: array.length.
Writing a for- or while-loop can take up quite a lot of space. It is also easy to make a mistake.
 */

console.log(`\n---------------Part 2 - For loop---------------\n`);
for (i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log(`___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description:  For loop
forEach:
Array.prototype.forEach()
    * Use the same color array as the starting point
    * Use the forEach array method, to log all items in your array to the console.

These were simple exercises. The core of this exercise is understanding a 
for loop/while loop versus an array method. Answer the following questions 
and put this as a comment at the bottom of your file.

1. How many lines does my for loop and my while loop take?
    //while loop has: 5 lines of code
    // for-loop has : 3 lines of code
2. How many lines does my forEach method take?
   // foreach method has: ?? lines of code
3. What other advantages do using an array method have over a for or a while loop? For example,
which method do you find easier to read? Why?
    // foreach method is easier to read/understand and to write, which makes it very pleasent to use.

 */

console.log(`\n---------------Part 3 - For loop---------------\n`);
colors.forEach((color) => {
  console.log(color);
});
console.log(`___________________End Part 3 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description:  looping an object
Can you use an array method on an object? The answer is no. 
Suppose you have an object with 45 properties. 

Try to find out (use Google) how you can still console.log those 45 properties 
with a loop: Looping through the properties of an object. 

Try this piece of code and use an object with 5 properties for it. 

Are you iterating now? do write, which makes it very pleasent to use.
 */

console.log(`\n--------Part 4 - methods for looping through object---------\n`);
// object student with 5 properties:
const student = {
  name: "John",
  gender: "male",
  age: 20,
  hobbies: ["reading", "watching tv", "coding"],
  favorite_color: "black",
};

// Method1: this is a for..in loop -> to iterate through all object properties
console.log(`\n-----------for..in loop-------\n`);
for (key in student) {
  console.log(`key: ${key} -> value: ${student[key]}`);
}

console.log(`\n------------------------------------------\n`);
/*  Method2: the object is looped using the Object.entries() method and the for...of loop.
The Object.entries() method returns an array of a given object's key/value pairs. 
The for...of loop is used to loop through an array. */
console.log(`\n-------Object.entries() method and the for...of loop-------\n`);
console.log(Object.entries(student) + "\n\n");
for ([key, value] of Object.entries(student)) {
  console.log(`${key}: ${value}`);
}
console.log(`___________________End Part 4 ____________________`);
// ---------------------------------------------------------------------------

console.log(`\n-----Experimenting with object iteration methods------\n`);
console.log(`\n------------Looping through object keys-----------------\n`);
/* using object.keys -> creates an array of all property keys, which you can use forEach-loop'
                          to loop over the itmes.*/
console.log(Object.keys(student)); // this is how the array of keys in the object looks like
Object.keys(student).forEach((i) => console.log(`${i}`));

console.log(`\n------------Looping through object values-----------------\n`);
/* using object.values -> creates an array of all property values, which you can use forEach-loop'
                          to loop over the itmes.*/

console.log(Object.values(student)); // this is how the array of values in the object looks like
Object.values(student).forEach((i) => console.log(`${i}`));

console.log(`\n-----------------------------------\n`);

console.log(`\r--------------------------------check \r`);
console.log(`\rthis out-----------------------------------\n`);

console.log("this new line here..?");
process.stdout.write("is this on same line as.......");
console.log("this new line here..?");
let userAnswer = prompt("What is your name> ");
console.log(userAnswer);
