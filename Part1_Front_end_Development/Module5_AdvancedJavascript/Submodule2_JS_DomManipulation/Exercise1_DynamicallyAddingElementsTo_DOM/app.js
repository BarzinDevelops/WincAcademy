
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
const removeFirstBtn = document.getElementById("remove-first-item-button");
const removeAllBtn = document.getElementById('remove-all-button');
let currentItems = spottedAnimalListUl.children
listArr = []

// getting all existing items of spotted list (like Duck in this case)
if(spottedAnimalListUl.hasChildNodes()){
    for(let i=0; i<currentItems.length; i++){
        listArr.push(currentItems[i].innerText)
    }
}

// checks for doubles, saves new unique values to listArr and returns listArr
const checkBeforeAdd = (arr) => listArr = [...new Set(arr)] 

// for updating spotted list every time animal buttons event occurs or when one or all items get removed.
const renderList = (arr)=>{
    arr.forEach(item => {
           for(let i=0; i<currentItems.length; i++){
                if(currentItems.item(i).innerText !== item){
                    listArr.push(item);
                    checkBeforeAdd(listArr)
               }
           }
    });
    addToSpotted()   
}

// Cleans current spotteslist items. Adds all items in listArr (which is already updated)
const addToSpotted = ()=>{
    spottedAnimalListUl.innerHTML = ""
    listArr.forEach(item =>{
        let listItem = document.createElement('li');
        listItem.innerText = item;
        spottedAnimalListUl.appendChild(listItem);
    });
}

// Part 2 - remove first item btn functionality:
removeFirstBtn.addEventListener('click', () => {
    listArr.shift();
    renderList(listArr);
});

// Part 3 - Removing Multiple Elements from the DOM
removeAllBtn.addEventListener('click', () => {
    listArr=[]
    renderList(listArr);
});

// attaches eventlistener to each animal button that gets triggered by 'click'-event type
bigFiveBtns.forEach(btn => {
    btn.addEventListener('click', (ev)=>{
        listArr.push(ev.target.innerText);
        renderList(checkBeforeAdd(listArr));
    });
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
