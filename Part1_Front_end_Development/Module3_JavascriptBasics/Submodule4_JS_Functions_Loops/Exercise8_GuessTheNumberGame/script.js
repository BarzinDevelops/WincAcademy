/* Requirements

These are the requirements that your project should fulfill:

X As a user, I want an introductory message that greets the user and asks for their name. 
  "Welcome! What is your name?"
X As a user, I want to be able to enter my name and click enter.
X As a user, after I entered my name, I want to see a message: "Hey [name]"
X As a user, after the greeting with my name, I want to be asked for a new input with a digit. 
X For example: "Enter a number between 0 and 25 to start guessing..."

X As a game developer, I want the user to have a realistic chance to win, 
  therefore I take a random number between 0 and 25. Hint: use Math.random()

X As a user, I want to be able to enter a number and click enter.

As a user, I want to receive a message when I guessed the wrong number, 
for example: "Unfortunately, that is not correct!". Afterward, I want to be asked to guess again.

X As a user, I want to receive a message when I guess the right number, 
    for example: "Congratulations, you have won the game!". 
    The game is now finished.

X As a user, I want to receive a message when the game is done, for example: "Bye [name], see you!"
*/
/* Bonus
A user gets a maximum of five tries to guess the number.
As a user, I want to see how many tries I have left after every attempt.
As a user, I want to receive a message when I have run out of tries. The game is now finished.
A user can specify the range between the random number that will be chosen.
As a user, at the start of the game, I want to be asked which is the smallest and 
  which is the largest number to guess.
As a user, I now play with the number range that I entered at the start of the game.
*/

//------------------------All my functions declarations-------------------------------------
//this function is only for making first letter of first word, to uppercase, when called.
const toTitle = (yourString) => {
  return yourString.charAt(0).toUpperCase() + yourString.slice(1);
};
// receives a chosen minimum and maximum number and returns random number
// between minimum and maxnumber.
const randNumFunc = (minNum, maxNum) => {
  maxNum++; // doing this, includes the given maxNum. By default  maxNum is not included.
  return Math.floor(Math.random() * (maxNum - minNum)) + minNum;
};
// -----------------------------------------------------------------------------------------

let user = prompt(`Welcome! What is your name?`);
while (user === undefined || user === null || user.length === 0) {
  user = prompt(
    "You did'nt give us your name yet! So please tell us your name: "
  );
}
alert(`Hey ${toTitle(user)}`);

const minimum = parseInt(prompt(`Which is the smallest number to guess: `));
const maximum = parseInt(prompt(`Which is the largest number to guess.: `));

const randNum = randNumFunc(minimum, maximum); // getting random number between minNum-maxNum
console.log(randNum);

let continueGame = true;
let attempt = 5;
while (continueGame) {
  if (attempt < 1) {
    // attempt = 0;
    alert(
      `You have ${attempt++} attempt(s) left!!
      You did get 5 TURNS already 😅 so... now, you run out of tries!!!. 
      The game is now finished.😵‍💫🤕`
    );
    continueGame = false;
  } else {
    const userGuess = parseInt(
      prompt(
        `You have ${attempt--} attempt(s) left!!
         Enter a number between ${minimum} and ${maximum} to start guessing: `
      )
    );

    if (userGuess === randNum) {
      alert(`🎉🎈🎊 Congratulations, you have won the game🎉🎊🍾🎈! 
        ANDDDDD You did it in ${attempt--} attempt(s)!!!😎🎊🎉😎
        Bye ${toTitle(user)} , see you! `);
      continueGame = false;
    }
  }
}
console.log("You're out of the while loop now pfffff...hahahah");
