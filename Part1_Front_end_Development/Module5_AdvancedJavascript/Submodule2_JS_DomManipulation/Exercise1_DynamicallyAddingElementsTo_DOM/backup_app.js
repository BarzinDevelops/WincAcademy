const bigFiveBtns = document.querySelectorAll('.big-five-button');
const spottedAnimalListUl = document.getElementById('spotted-animals-list');
const currentItemDuck = document.querySelector(".spotted-animals-list-item");
// Part 2- remove the first btn 
const removeFirstBtn = document.getElementById("remove-first-item-button");
// Part 3 - remove all
const removeAllBtn = document.getElementById('remove-all-button');

/* 
Selecteer alle elementen met een bepaalde class door querySelectorAll te gebruiken. 

Daarna kan je dan over al deze elementen loopen en op een dynamische manier alles een eventListener meegeven

Uiteindelijk hoef je eigenlijk alleen deze dingen te doen: 
je klikt op een knop van de big five dieren > je voegt deze toe aan 
je spotted_list (of in elk geval de waarde van de knop waar op geklikt is) > 
tegelijkertijd verwijder je deze juist uit de big_five lijst
*/

listArr = []
if(spottedAnimalListUl.hasChildNodes())
    listArr.push(spottedAnimalListUl.children[0].innerText)

let checkBeforeAdd = (arr) => {
    listArr = [...new Set(arr)]
    console.log("listArr in checkBeforeAdd() => ", listArr)
    return listArr
}
const renderList = (arr)=>{
    arr.forEach(item => {
        if(spottedAnimalListUl.hasChildNodes()){ 
           let currentItems = spottedAnimalListUl.children
           for(let i=0; i<currentItems.length; i++){
                if(currentItems.item(i).innerText !== item){
                    // listArr.push(currentItems.item(i).innerText);
                    console.log("currentItems.item(i).innerText => ", currentItems.item(i).innerText)
                    console.log("item => ", item)
                    listArr.push(item);
                    checkBeforeAdd(listArr)
                    console.log("listArr in renderList() => ", listArr)
               }
           }
        }
    });
    addToSpotted()   
}
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




bigFiveBtns.forEach(btn => {
    btn.addEventListener('click', (ev)=>{
        listArr.push(ev.target.innerText);
        renderList(checkBeforeAdd(listArr));
    });
})