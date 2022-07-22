
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
