/*  Sub-question: most people - 3 points
    - List all countries that appear in the data.
    - Behind each country should be stated how many of 
      the people in the list live in that country.
    - The list should be sorted so that the countries 
      with the most people are at the top.
*/

let mostPopulation = {};


// list all countries:
regionData = randomPersonData.map(person => person.region);
// log(`regionData:`,regionData)

regionData.forEach(region => mostPopulation[region] ? mostPopulation[region] += 1: mostPopulation[region] = 1);

mostPopulation = Object.entries(mostPopulation).sort((a,b)=> a[1] > b[1] ? -1: 1);

// log('countryPopulation: ', mostPopulation)


const mostPeopleBtn = document.getElementById('most-people');


const renderMostPeople = (...countries)=>{
    // log('countries', countries)
    countries.forEach(country => {
        let newListItem = document.createElement('li');
        let spanFortext = document.createElement('span');
        spanFortext.textContent = `${country[0]} - ${country[1]}`;
        newListItem.appendChild(spanFortext);
        spanFortext.style = 
        `

            font-weight: bold;
            max-width: auto;
            line-height: 1.5;
        `

        resultsContainer.appendChild(newListItem);
    })

}


btnEventCreator(mostPeopleBtn, renderMostPeople, mostPopulation)
