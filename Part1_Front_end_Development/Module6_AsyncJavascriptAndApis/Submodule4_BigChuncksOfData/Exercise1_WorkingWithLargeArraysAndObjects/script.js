const log = console.log;
const titleOfLists = document.createElement('h1');
const resultsContainer = document.getElementById('results');


const countryListBtn = document.getElementById('country-list');
const capricornWomenBtn = document.getElementById('capricornwomen');
const listTitle = document.getElementById('')



// Get county of eacht person in randomPersonData array:
const getCountries = randomPersonData.map(person => person.region);

// return an array of countries with no doubles (using Set()): 
const countryList = [...new Set(getCountries)];

const render = arrayToRender => {
    arrayToRender.forEach(element => {
        const newItem = document.createElement('li');
        newItem.textContent = element;
        resultsContainer.appendChild(newItem);
    });
}

// SubExercise1_CountryList
countryListBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = countryListBtn.innerText;
    resultsContainer.append(titleOfLists);
    render(countryList);
});


// SubExercise2_CapricornWomen  
capricornWomenBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = capricornWomenBtn.innerText;
    resultsContainer.append(titleOfLists);
    // render(countryList);
})