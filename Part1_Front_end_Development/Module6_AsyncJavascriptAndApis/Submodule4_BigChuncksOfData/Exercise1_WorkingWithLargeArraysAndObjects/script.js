const log = console.log;
const titleOfLists = document.createElement('h1');
const resultsContainer = document.getElementById('results');


const countryListBtn = document.getElementById('country-list');
const capricornWomenBtn = document.getElementById('capricornwomen');
const listTitle = document.getElementById('')


/* Sub-exercise: country list - 1 point
    List all countries, sorted by country name. */

// Get county of eacht person in randomPersonData array:
const getCountries = randomPersonData.map(person => person.region);

// return an array of countries with no doubles (using Set()): 
const countryList = [...new Set(getCountries)].sort();

const render = arrayToRender => {
    arrayToRender.forEach(element => {
        const newItem = document.createElement('li');
        newItem.textContent = element;
        resultsContainer.appendChild(newItem);
    });
}
countryListBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = countryListBtn.innerText;
    resultsContainer.append(titleOfLists);
    render(countryList);
});
// -------------------------------------------------------------//
/* Sub exercise: Capricorn women - 3 points
Make a list of people:
show their first and last name and photo
sort the list by their first name
every person on that list must
be a woman
be older than 30 (1990 or older)
be a Capricorn (birthday from December 22 to January 19) */


capricornWomenBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = capricornWomenBtn.innerText;
    resultsContainer.append(titleOfLists);
    // render(countryList);
});



// ----------------------------------------------------------//