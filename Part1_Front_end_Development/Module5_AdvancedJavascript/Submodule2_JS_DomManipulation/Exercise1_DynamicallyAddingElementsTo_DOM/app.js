
/* Part 1 - Adding Elements to the DOM
You are on safari and you are going to spot The Big Five. 
The only animal you've spotted so far is a duck.

Exercise: When I click on a button of one of the Big 5 as a user, 
I want it to appear in my list with "animals spotted".

Todo list for this exercise:
-----------------------------
1. Add an event listener to the buttons
2. Create a function that gets called when one of the buttons is clicked. Check this with a console.log.
3. Make sure the click event is passed to this function.
4. Make sure you have access to the value of the button clicked in this function. Check this with console.log. The outcome you want to see in the console when you click is: Leopard / Lion / Elephant / Rhino or Buffalo.
5. Create a new list item with JavaScript with the above value (namely the animal you clicked on.
6. Select the parent element to which you want to attach this new list item (the spotted animals list).
7. Add the new list item to the parent element.
*/

// console.log(`\n================================================================================\n  Solution Part1:\n================================================================================\n`)
const bigFiveBtns = document.querySelectorAll('.big-five-button');
const spottedAnimalListUl = document.getElementById('spotted-animals-list');
const currentItemDuck = document.querySelector(".spotted-animals-list-item");
let resultCheck = null;
//---------------My Functions-----------------------------
let checkBeforeAdd = (arr) => {
        // console.log([...new Set(arr)])
        // return [...arr]
   /* return arr.filter((item,index,selfArr) =>{

    console.log("item => ", item);
    console.log("typeof item => ", typeof item);
    
    // console.log("index => ", index);
    // console.log("selfArr => ", selfArr);
    console.log(" selfArr.indexOf(item) => ",  selfArr.indexOf(item));
    console.log("index => ", index);
    console.log("selfArr.indexOf(item) !== index => ", selfArr.indexOf(item) !== index);
    console.log("-------------------------------------------\n\n");
       return selfArr.indexOf(item) === index;
    }); */
}

let testCheck = (arr) => {
    console.log("this is the check: ",[...new Set(arr)])
    return [...new Set(arr)]
}



//-----------------------------------------------------------

let listArr = [];
let listItemArr = [];
let testArr = [1,2,2,4,3,3,4,5];
// console.log("typeof testArr => ", Array.isArray(testArr) );
const btnPushedAction = (ev) =>{
// ----------------testen-----------------------
listArr.push(currentItemDuck.innerText);
listArr.push(ev.target.innerText);
// console.log("testCheck(listArr) => ", testCheck(listArr));
listItemArr = testCheck(listArr);
spottedAnimalListUl.replaceChildren();
listItemArr.forEach(item => {
    let listItem = document.createElement('li');
    listItem.innerText = item;
    spottedAnimalListUl.appendChild(listItem);
    
})

// ---------------------------------------
/*     let listItem = document.createElement('li');
    listItem.innerText = ev.target.innerText;
    listArr.push(listItem);
    // testArr.push(5);
    console.log("listArr", listArr);
    // console.log("testArr", testArr);
 */

    // console.log("checkBeforeAdd(listArr) => ", checkBeforeAdd(listArr));
    // console.log("checkBeforeAdd(listArr) => ", checkBeforeAdd(testArr));
    
    


    // spottedAnimalListUl.appendChild(listItem);
    console.log("-------------------------------------------\n\n");

}

bigFiveBtns.forEach(btn => {
    btn.addEventListener('click', btnPushedAction);
})



// console.log(`\n================================================================================\n  END of Solution Part 1\n================================================================================\n`)



/* Part 2 - Remove 1 element from the DOM
Exercise: When I click on the "remove the first item" button as a user, 
the duck I spotted on my trip to the airport is 
removed (it is a bit of an odd duck in this list of the big five). 
The user can keep clicking this button, each time the first item is deleted.

Todo list for this exercise:
----------------------------------
1. Pin an event listener to the button.
2. Pin a function to the event listener.
3. In the function: select the duck (the element).
4. Also select the parent.
5. Use parent.removeChild(child).
6. Alternative: Remove the element with ChildNode.remove().


console.log(`\n================================================================================\n  Solution Part 2:\n================================================================================\n`)

console.log(`\n================================================================================\n  END of Solution Part 2\n================================================================================\n`)

*/

/*
Part 3 - Removing Multiple Elements from the DOM
Exercise: When I click on the "remove all spotted animals" button as a user, all animals that I have spotted are removed.

Todo list for this exercise:

1. Add an event listener to the button.
2. Add a function to the event listener.
3. In the function: select the parent.
4. Remove all children from the parent. 
   The simple way: set the parent's innerHTML equal to an empty string 
   The chic way: select the parent and use a loop to remove each
   element 1 by 1 with .remove() or .removeChild(). 


console.log(`\n================================================================================\n  Solution Part 3:\n================================================================================\n`)

console.log(`\n================================================================================\n  END of Solution Part 3\n================================================================================\n`)

*/

