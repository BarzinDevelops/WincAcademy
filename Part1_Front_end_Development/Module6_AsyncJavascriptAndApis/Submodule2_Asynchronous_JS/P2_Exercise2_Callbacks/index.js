

// Step 1
// Create a function and name it makeHomework , this function 
// takes two arguments. You can name the first argument course 
// and the second argument callback. The makeHomework function 
// outputs a console.log that reads: 
// "Okay, ok, I'm going to do my [insert course here] homework now".

const log = console.log;

function makeHomework(course, callback) {
  log(`Okay, ok, I'm going to do my ${course} homework now.`);

// Just to count passed miliseconds
    let trigger=1; 
    myInterval = setInterval(() => {
        console.log(trigger, "second passed..");
        if(trigger === 3){
            clearInterval(myInterval)
        }
        trigger++;
    }, 1000);

  setTimeout(() => {
    callback();
  }, 3000);

}


// Step 2
// Under the now complete function of makeHomework, create a separate 
// function that you call doneWithHomework. It does not accept arguments.
// The doneWithHomework function runs a console.log that says "Look, 
// Mom/Dad, I'm done with my homework!".

function doneWithHomework() {
  log(`Look, Mom/Dad, I'm done with my homework!`);
}


// Step 3
// Under both functions you can now call the Make homework function with 
// two arguments. The first takes the string "math", the second argument 
// is the function doneWithHomework.

makeHomework("math", doneWithHomework);


// Step 4
// Use SetTimeOut() in your makeHomework function.
