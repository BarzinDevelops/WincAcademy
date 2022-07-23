
// setTimeout(function(){
//     console.log("This is first setTimeOut()")
// },3000)

// console.log("This is first msg before first setTimeOut()");

// setTimeout(function(){
//     console.log("This is second setTimeOut()")
// },2000)


// console.log("This is second msg before first setTimeOut()");


const myWindow = window.open("", "", "width=200, height=100");

myWindow.document.write("<body style='background: red;'>this is test</body>");

setTimeout(function() {myWindow.close()}, 4000);


/* 
Learning goals:

I can explain in what way, JavaScript is Synchronous.
    it can only execute one command at a time 
    and the other commands need to wait for executing 
    before the running command executes.

I can explain why you may sometimes need Asynchronous JavaScript.
    
I can use a setTimeout() myself, to test async JavaScript.
*/