/*1. Copy the data at the bottom of this page into a js file and put it in a 
     const variable called superheroes.
     For each of the commands below, you may only use .map, .filter or .reduce.
 */
const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]
// -------------------------------------------------------------------------------------
// Take the superheroes data and turn it into the following...

// 1. Make an array of all superhero names.
/* 
console.log(`\n================================================================================\n  Solution assignment1:\n================================================================================\n`)
console.log(superheroes.map(hero => hero.name));
console.log(`\n================================================================================\n  END ofSolution assignment1\n================================================================================\n`)
*/

// 2. Make an array of all "light" superheroes (< 190 pounds).
/* 
console.log(`\n================================================================================\n  Solution assignment2:\n================================================================================\n`)
console.log(superheroes.filter(hero => hero.weight < 190));
console.log(`\n================================================================================\n  END ofSolution assignment2\n================================================================================\n`)
*/

/*  3.Create an array with the names of the superheroes who weight 200 pounds.

    Extra: chaining ⛓️
    The great thing about array methods is, you can chain them. 
    In other words, you can make a chain out of it. For example, 
    if you first ran a .filter function to filter the superheroes who weigh 200 pounds,
    you can then use a .map function afterward that returns the names of the superheroes. 
    -----------------------
    For example: 
    // Pseudo code (almost real code):
    heroes.map(hero => {
      return [do something with the hero]
      }).filter(hero => {
              return [do something with the array that has just been through the map function, so it looks different from the original array]
      }
    ----------------------
    */
/*  
console.log(`\n================================================================================\n  Solution assignment3:\n================================================================================\n`)

const weightAbove200 = superheroes
.filter(hero => Number(hero.weight) === 200)
.map(hero => `${hero.name} => ${hero.weight}`);

console.log(weightAbove200);

console.log(`\n================================================================================\n  END ofSolution assignment3\n================================================================================\n`)
*/

// 4. Make an array with all the comics where the superheroes had their "first appearances".
/* 
console.log(`\n================================================================================\n  Solution assignment4:\n================================================================================\n`)
// console.log(superheroes);
const firstAppearance = superheroes.map(hero => hero.first_appearance);
console.log(firstAppearance);
console.log(`\n================================================================================\n  END ofSolution assignment4\n================================================================================\n`)
  */

/*  5.Create an array of all DC Comics superheroes. Did that work? 
    Then repeat the above function and also create an array with all Marvel Comics superheroes. */
console.log(`\n================================================================================\n  Solution assignment5:\n================================================================================\n`)

const comics = (arr, publisher)=> { 
    return arr.filter(hero => hero.publisher === publisher)
    .map(hero => {return hero.name})
}

console.log(`DC Comics: `,comics(superheroes, 'DC Comics'));
console.log(`Marvel Comics: `,comics(superheroes, 'Marvel Comics'));

console.log(`\n================================================================================\n  END ofSolution assignment5\n================================================================================\n`)
/*   */

/*  6.Add up the weight of all DC Comics superheroes. 
    Pay attention! Conditional to the rescue! The weight you see here, what data type is that? 
    A number? Or a string? Oh yeah, and do all superheroes have weight? */
/* 
console.log(`\n================================================================================\n  Solution assignment61:\n================================================================================\n`)
console.log(`\n================================================================================\n  END ofSolution assignment6\n================================================================================\n`)
*/

/*  7.Add up the weight of all Marvel Comics superheroes. 
    Pay attention! Conditional to the rescue! The weight you see here, what data type is that? 
    A number? Or a string? Oh yeah, and do all superheroes have weight? */
/* 
console.log(`\n================================================================================\n  Solution assignment7:\n================================================================================\n`)
console.log(`\n================================================================================\n  END ofSolution assignment7\n================================================================================\n`)
*/

// 8. Bonus: find the toughest superhero! Use the array of superheroes.
/* 
console.log(`\n================================================================================\n  Solution assignment8:\n================================================================================\n`)
console.log(`\n================================================================================\n  END ofSolution assignment8\n================================================================================\n`)
*/

