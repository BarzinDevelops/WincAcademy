/* Exercise Description: Even Odd Reporter
 
Write a loop that iterates from 0 to 20. During each iteration, check whether the 
current number is even or odd. Use console.log to view the output.
Since this is your first looping exercise, use the following code to get started:
Adjust the code as you see fit. To calculate whether a number is odd or even, 
check out the Remainder operator.
*/
console.log(`\n---------------Part 1 - Even Odd Reporter---------------\n`);
for (let i = 0; i <= 20; i++) {
  console.log(`Is ${i} even or odd? ${i % 2 === 0 ? `even` : "odd"} `);
}
console.log(`___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: Multiplication tables

We all know them from elementary school: multiplication tables. 
Write a script that prints the multiplication table of 9. 
The output should look like this:
Bonus: use a nested for loop to write the multiplication 
tables of 1 until 10. Start the loop at the lowest number 
(in this case 1). The output now looks like this:
When you have completed the bonus, your script prints 100 
lines to your console (10 for each multiplication table).
 */

console.log(`\n---------------Part 2 - Multiplication tables---------------\n`);
for (i = 0; i <= 10; i++) {
  for (j = 0; j <= 10; j++) {
    console.log(`${j} * ${i} = ${j * i}`);
  }
}
console.log(`___________________End Part 2 ____________________`);
// ----------------------------------------------------------------
/* Exercise Description: The grade assigner

For this exercise, your start off with an existing function 
that determines the grade based on a score of 0-100:
Write a for loop that iterates from 60 to 100. This value 
indicates the "score" of a student. During each iteration, 
call the assignGrade function with the current and log 
the following statement:

For scoring 80 points, you get an C
When you have completed the grade assigner, your script 
prints 40 lines to your console (one for each score).
 */

console.log(`\n---------------Part 3 - The grade assigner---------------\n`);
function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (let i = 60; i <= 100; i++) {
  console.log(`For scoring ${i} points, you get an ${assignGrade(i)}`);
}
console.log(`___________________End Part 3 ____________________`);
// ----------------------------------------------------------------
