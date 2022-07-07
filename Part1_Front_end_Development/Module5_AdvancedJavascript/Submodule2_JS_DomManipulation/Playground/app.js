

const unorderedList = document.createElement("ul");
unorderedList.classList.add('main-list');

const listItem = document.createElement("li");
listItem.classList.add('items','li-1');

unorderedList.appendChild(listItem);

document.body.appendChild(unorderedList);


const mainList = document.querySelector('.main-list');
// console.log(mainList);

mainList.removeChild(listItem);