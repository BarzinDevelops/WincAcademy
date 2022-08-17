// In this file you find all the general declarations that are used in all or
// most of the exercise specific scripts. This is done to prevent repeating.

const log = console.log;
const titleOfLists = document.createElement('h1');
const resultsContainer = document.getElementById('results');


// creating eventlistener for each query button:
const btnEventCreator =(btnName, renderFunc, resultToRender) =>{
    btnName.addEventListener('click', ()=>{
        resultsContainer.replaceChildren();
        titleOfLists.textContent = btnName.innerText;
        resultsContainer.appendChild(titleOfLists);
        renderFunc(...resultToRender);
    });
};