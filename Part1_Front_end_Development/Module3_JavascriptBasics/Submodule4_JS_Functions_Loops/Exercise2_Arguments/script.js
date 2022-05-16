/* Exercise Description: No arguments

Let's create a function that can paint walls.

1. create a new JavaScript file
2. first just check if you can run it with node
3. think of a good clear name for your function first
4. to paint a wall print something like "The wall has been painted red" to the console
5. first write a function that always paints the wall red (so no argument yet)
6. call the function to check if it works
 */
console.log(`\n---------------Part 1 -  []---------------\n`);

const paintWall = function () {
  console.log(`The wall has been painted red.`);
};

paintWall();

console.log(`\n___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: Single argument
1. now add an argument to the function
2. think of a good name for the argument
3. change the function so it uses the argument when it runs
4. if the function gets the string "green" it should print "The wall has been painted green"
5. call the function to check if it works, be sure to pass an argument when you call the function
6. call the function a second time, now pass in another color
7. what happens if we call the function without an argument? // We get undefined instead of color!
 */

console.log(`\n---------------Part 2 - []---------------\n`);

const paintWall2 = function (wallColor) {
  console.log(`The wall has been painted ${wallColor}.`);
};

paintWall2("green");
paintWall2("black");
paintWall2();

console.log(`\n___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: Multiple arguments
Let's add another argument. We now want to choose the wall that we want to paint.
    1. the new function should output something like "The north wall has been painted orange" or 
       "The south-east wall has been painted grey"
    2. think of a good name for this new argument
    3. change the function so it takes two arguments
    4. change the function so it uses both arguments
    5. call the function to see if it works
    6. does the order of the arguments matter when calling the function? // yes, otherwise the order changes
    7. what happens if you switch them in the function definition?
    8. what happens if you change the order of the arguments in the function definition and 
       when calling the function?
 */

console.log(`\n---------------Part 3 - []---------------\n`);

// const paintWall3 = function (wallLocation, wallColor) {
const paintWall3 = function (wallColor, wallLocation) {
  //   console.log(`The ${wallLocation} wall has been painted ${wallColor}.`);
  console.log(`The ${wallColor} wall has been painted ${wallLocation}.`);
};

paintWall3("north", "orange");
paintWall3("south-east", "grey");
// paintWall3("grey", "south-east");

console.log(`\n___________________End Part 3 ____________________`);
