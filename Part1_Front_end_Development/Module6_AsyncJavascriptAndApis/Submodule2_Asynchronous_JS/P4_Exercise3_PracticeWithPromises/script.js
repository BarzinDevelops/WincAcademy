const log = console.log;


/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a 
Promise that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/

/* const testNum = (number) => { 
    return new Promise((resolve, reject)=>{
        if(number < 10) resolve(`${number} is less than value 10`);
        else if(number > 10) resolve(`${number} is greater than value 10`);
        else reject(`Error-message:\t${number} is equal to value 10.
        \t\tWhat we want check is if number is bigger/smalle than value 10!`);
    })
    .then(result=> log(result))
    .catch(err => log(err.message ? err.message : err)); // if its an custom error msg than err is loged else err.message
};

testNum(11);
testNum(9);
testNum(10);*/
 


