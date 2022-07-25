/* Learning goals:
I understand what Promises are and what "problem" they solve:
  A promise is an object that may produce a single value some 
  time in the future : either a resolved value, or a reason that 
  it's not resolved (e.g., a network error occurred). 
  A promise may be in one of 3 possible states: fulfilled, rejected, or pending.

I understand how Promises are different from Callbacks:
    Promises are easy to manage and easier to read and debug, when dealing with multiple asynchronous operations 
    also promises provide catching mechanism (for error handling) which are not in callbacks.

I know how to make a Promise, but more importantly: how to make a Promise "consume"
 */

const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const log = console.log;

/* Practice with fetch api (promise)
 const getUsers = () =>{
  let users = fetch(apiUrl);
  users
  .then(data=>{
    return data.json();
  })
  .then(userData=>{
    if(userData.length > 0){
      userData.forEach(user=> log(`
      Name: ${user.name}, 
      Username: ${user.username}, 
      City: ${user.address.city},
      Street: ${user.address.street}, 
      Email: ${user.email}`));
    }
    return userData
  })
  .catch(err => log(`Erroar: `, err))
}
getUsers();

 */

/* // Example Code : how to create and use an promise 
const santaIsGenerous = false;

 // Make a promise (so you don't have to learn this, this is on the API (back-end) side)
 const willIGetANewIphone = new Promise(
     (resolve, reject) => {
         if (santaIsGenerous) {
             const smartphone = {
                 brand: 'Apple',
                 type: 'iPhone 11'
             };
             resolve(smartphone);
         } else {
             const withWhatReason = new Error("You've been naughty, no gifts for you");
             reject(withWhatReason);
         }

      }
 );

 // Call Promise, or "consume" (you will do this and thus have to learn it, in contrast to creating above promise)
 const askSanta = () => {
     willIGetANewIphone
         .then(function (resolved) {
             // yay, you got a new Iphone
             console.log(resolved);
         })
         .catch(function (error) {
             // whoops, no present from Santa this year...
             console.log(error.name,"\n",error.message);
         });
 }

 askSanta(); */

/* // How to handle and throw Error using try/catch and Error object
 const testErroHandling = ()=>{
  try {
    let hello = prompt("Type hello")
    if (hello !== 'hello'){
      throw new Error("Oops, you didn''t type hello")
    }
  } catch(e) {
    alert(e.message)
  } finally {
    alert('thanks for playing!')
  }
}

testErroHandling(); */


