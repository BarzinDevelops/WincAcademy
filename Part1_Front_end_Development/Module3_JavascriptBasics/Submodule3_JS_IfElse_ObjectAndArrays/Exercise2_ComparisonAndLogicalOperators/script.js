// Part1:
console.log(`\n-------Part 1--------\n`);
const age = 18;

if (age >= 18 && age < 25) {
  console.log(
    "Your allowed to enter my club. \nYou also get 50% siscount on your beers."
  );
} else {
  console.log(
    "You're too young to enter this club my friend, please stay outside."
  );
}

// Part2:
console.log(`\n-------Part 2--------\n`);

const firstName = "Sarah";

if (firstName === "Sarah" || firstName === "Bram") {
  console.log(
    `Hi there ${firstName}, you are 50, so your beer is on the house ;-)`
  );
} else {
  console.log("You are not participating in our fun Sarah Abraham promotion");
}

// Part 3:
console.log(`\n-------Part 3--------\n`);
const totalAmount = 100;

if (totalAmount > 25 && totalAmount <= 50) {
  console.log(
    "You spend more then €25,- SOOOO you get free (veggie) bitterballen on the house ;-)"
  );
} else if (totalAmount > 50 && totalAmount < 100) {
  console.log(
    "Niceeeee you spend more then €50,- SOOOO you get a free portion of NACHOOOOSSSS on the house ;-)"
  );
} else if (totalAmount >= 100) {
  console.log(
    "WOOOOOOWWWW You spend €100,- or more...\nNOW you deserve this free bottle of Champagne!!🍾 on the house ;-) \n🎈🎉🎊🎉🎈ENJOYYYYYYYYYYYYYYYYYYY🎈🎉🎊🎉🎈"
  );
}
