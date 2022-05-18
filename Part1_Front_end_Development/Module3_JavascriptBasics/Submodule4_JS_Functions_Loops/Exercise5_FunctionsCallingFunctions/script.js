// Functions calling functions: exercise
/* Exercise Description: Hey kiddo

We're going to write two functions, one that greets and another 
that checks if someone is an adult.

1. create a function that has one parameter: the age
2. this function should return true if the age is >= 18, false in all other cases
3. think of a good name for the function and the parameter
4. create a second function that has one parameter: the age
5. think of a good name for the function and the parameter
6. this second function uses (calls) the first function, giving it the age, 
to check if we get an adult age
7. if it's an adult the second function should return "Hello there"
8. if it's not an adult it should return "Hey kiddo"
9. use console.log to display the return value of the second function
10. experiment so you're sure your function works
 */
console.log(`\n---------------Part 1 - function declaration ---------------\n`);

const checkAge = (age) => age >= 18;
const greets = (age) => (checkAge(age) ? "Hello there" : "Hey Kiddo");

console.log(`checking 'greets(17) function return value: ${greets(17)}`);
console.log(`checking 'greets(18) function return value: ${greets(18)}`);
console.log(`checking 'greets(34) function return value: ${greets(34)}\n`);
console.log(`checking 'greets(65) function return value: ${greets(65)}`);
console.log(`checking 'greets(10) function return value: ${greets(10)}`);

console.log(`\n___________________End Part 1 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise MAIN - Description: VAT calculations

In this exercise we're going to let you figure out the steps a bit more.

On almost everything you buy you pay VAT: Value Added Taxes. 
 This is one way for the government to put taxes on sold goods. 
 The amount of VAT varies per kind of purchase. 
 In the Netherlands you pay 
    21% VAT on most goods, 
    9% VAT on food and 
    0% on some types of purchases.

To calculate the VAT for a product with 21% VAT: baseprice * 0.21.

For example, the price for a computer without VAT is 1000. 
 The VAT percentage for a computer is 21%. The VAT would be: 1000 * 0.21, so 210. 
 The price including VAT would be: 1000 * 1.21, so 1210.

For example, the price for a loaf of bread without VAT is 2. 
The VAT percentage for a loaf of bread is 9%. The VAT would 
be: 2 * 0.09, so 0.18. The price including VAT would be: 2 * 1.09, so 2.18.

    To calculate the VAT and base price from a product that you bought with 
    VAT you can do the reverse calculation.

    If you paid 1210 (including VAT) for a computer you can do: 
    1210 / 1.21 to get the baseprice: 1210 - (1210 / 1.21) to get the VAT of 210

    If you paid 2.18 (including VAT) for a loaf of bread you can do: 
    2.18 / 1.09 to get the baseprice: 2.18 - (2.18 / 1.09) to get the VAT of 0.18
--------------------------------------------------------------------------------
 */

/* Exercise Description: VAT exercise 1:

Now let's write some code. 
1. First let's write a function that takes the base price 
    and the VAT percentage and returns the price including VAT. 
2. You must do the calculation of the VAT amount in a separate function. 
So, in the spirit of the lesson: we have a main function that does the main 
calculation and another function that we call from this main function.

Make sure your functions work by testing them with different values and 
checking the result with a calculator or pen and paper.
*/

console.log(`\n---------------Part 2 - function Expression---------------\n`);

const calcVAT = (price, vat) => {
  //   console.log(`(vat / 100) * price ${(vat / 100) * price}`);
  return (vat / 100) * price;
};

const priceIncVAT = (basePrice, vatPercentage) => {
  vat = calcVAT(basePrice, vatPercentage);
  return `Your final price included ${vatPercentage}% VAT is: ${
    basePrice + vat
  }`;
};

console.log(priceIncVAT(1000, 21));
console.log(priceIncVAT(250, 9));
console.log(priceIncVAT(2, 9));

console.log(`\n___________________End Part 2 ____________________`);
// ---------------------------------------------------------------------------
/* Exercise Description: VAT exercise 2:

In this exercise we're going to calculate the base price and VAT amount. 
1. The main function you make should 
    - take the amount including VAT and the VAT percentage. 
    priceIncVat
    vatPercentage
2. The return value should be an array with two elements: 
    -base price and 
    -VAT amount. 

Again: make sure you use two functions, where the main one calls another function 
to do part of the calculation.

Make sure your functions work by testing them with different values and 
checking the result with a calculator or pen and paper.
*/
console.log(`\n---------------Part 3 - Arrow Function---------------\n`);
const getVatAmount = (price, vat) => {
  return price - price / (1 + vat / 100);
};

const basePriceAndVat = (priceWithVat, vatPercentage) => {
  const vatAmount = getVatAmount(priceWithVat, vatPercentage);
  const basePrice = priceWithVat - vatAmount;
  return [parseFloat(basePrice.toFixed(2)), parseFloat(vatAmount.toFixed(2))]; //used .toFixed() method for rounding to 2 numbers after decimalpoint
};

console.log(basePriceAndVat(2.18, 9));
console.log(basePriceAndVat(1210, 21));
console.log(basePriceAndVat(894, 9));

console.log(`\n___________________End Part 3 ____________________`);
// ---------------------------------------------------------------------------
