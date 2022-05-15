/* Exercise Description:
In this exercise we're going to write our first functions. Introduction

We're going to write a function that makes pizza (sadly, we're not going to actually make pizza).

1. create a new JavaScript file
2. first just check if you can run it with node
3. to take a step in the pizza-making process print the step to the console
4. think of a good clear name for your function first
5. think of at least three steps you need in your function
6. write the function
7. run the code, are you getting the result you expect? Why (not)?
8. now add code to call your function
9. now call your function three times


 */
console.log(`\n---------------Part 1 - Making Pizza---------------\n`);
function makePizza() {
  console.log("Step1: prepare dough.");
  console.log("Step2: spread saus on the dough.");
  console.log("Step3: put ingredients over the dough.");
  console.log("Step4: put pizza in the oven.\n");
}

makePizza();
makePizza();
makePizza();
console.log(`___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description:
Now we have a single function, but let's make another function! We also want to make sushi.

1. continue in the same JavaScript file
2. add a function that makes sushi, use a good name
3. call this function, check that it works

So now, let's for a minute pretend that we work in a restaurant and we get an order for three meals of sushi and two pizzas.
1. change your code so that the output of your program is the steps for making sushi, three times and pizza two times


 */

console.log(`\n---------------Part 2 - Making Sushi---------------\n`);

function makeSushi() {
  console.log("Step1: buy sushi.");
  console.log("Step2: bring the sushi home.");
  console.log("Step3: Put the sushi on your plate.");
  console.log("Step4: start eating it. hahahahah\n");
}

makeSushi();
makeSushi();
makeSushi();
console.log("\n--------------\n");
makePizza();
makePizza();

console.log(`___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------
