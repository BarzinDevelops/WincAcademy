const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "chicken hypnotist", age: 59 },
    { name: "A. Curry", profession: "frogman", age: 32 },
    { name: "F. Vonk", profession: "snake milker", age: 36 },
    { name: "B. Bunny", profession: "rabbit walking service", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
  ];

/*
1. What does each object look like? Log all objects in the loop. Provide your console.log 
with an accompanying text, so that you know what you are going to log (good practice):
-----------------
console.log("This is the whole person:", [the object should go here]);
------------+++++++
*/
console.log(`---------------------------
Part 1:
---------------------------`);
i=1;
ageMsg = ""
for (let person of array) {
if(person.age>50){
  ageMsg = "-> is older the 50!! 🥸  ☠️"
}else ageMsg = "";
console.log(`This is the object of the person ${i++}:\n\r`, person, `
name: ${person.name}
profession: ${person.name} is a ${person.profession}
Year of birth: ${2022 - person.age}
Age: ${person.age}${ageMsg}\n`);  
}

/*
2. Only log all names with a description in front of it ⇒ the log should say for example: 
(this is the name: [the name of the person]).*/
console.log(`---------------------------
Part 2:
---------------------------`);
array.forEach((person, i)=> {
console.log(`name person${i+1}: ${person.name}`);
})

/*
3. Log the year of birth (not the age) for each person.*/
console.log(`---------------------------
Part 3:
---------------------------`);
array.forEach((person,i)=>{
console.log(`Birth year of ${person.name}: `, 2022-person.age)
})


/*
4. {}Log all names + occupations ⇒ so that the log would look like this: 
"N. Armstrong is a space cowboy".*/

console.log(`---------------------------
Part 4:
---------------------------`);
array.forEach(person =>{
console.log(`${person.name} is a ${person.profession}.`)
})

/*
5. Place an if statement in the loop that checks if a person is over 50 years old. 
Then put another console.log in this if statement. Does your if statement work?
*/
console.log(`---------------------------
Part 5:
---------------------------`);

array.forEach((person)=>{
let age = 2022 - (2022 -person.age);
if(age > 50){
console.log(`${person.name} is ${age-50} years older than 50.`)
}
})

console.log(`\n\n###########################
      Solutions:
###########################\n`);


for (let person of array) {
console.log("This is the whole person:", person);
console.log("And here we have: ", person.name);
console.log("Date of birth:", 2020 - person.age);
console.log("profession:", person.name + " is een " + person.profession);
  if (person.age > 50){
          console.log("Person is older than 50", person.name)
  }
console.log(`---------------------`);
}