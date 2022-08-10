
/* Sub-exercise 3: old credit cards - 4 points
    Some people's credit card is about to expire, 
    we're going to call them to warn them.

    Make a list of people:
    show the following data per person
        first name Last Name
        phone number
        credit card number
        expiration date
        The list should contain adults only.

    The expiration date must be in the future (this year).
    The expiration date must be within the next year.
    Sort the list so that the fastest expiring credit cards are at the top.
    Read here about how to get the current date. Your script should also work properly in 2 months.
*/




const renderToPage = (...selectedPeople) => {
    // log('in renderToPage get selectedPeople: ',selectedPeople)
    selectedPeople.forEach(person => {
     
    const persContainer = document.createElement('div');
    persContainer.classList.add('person-card');
    resultsContainer.appendChild(persContainer);

    const newItem_name = document.createElement('li');
    newItem_name.textContent = `Name: ${person.name}`;
    newItem_name.style.color = 'purple';

    const newItem_surname = document.createElement('li');
    newItem_surname.textContent = `Surname: ${person.surname}`;
    newItem_surname.style.color = 'blue';

    persContainer.appendChild(newItem_name);
    persContainer.appendChild(newItem_surname);

});
};

const oldCreditCardBtn = document.getElementById('old-creditcard');
oldCreditCardBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = oldCreditCardBtn.innerText;
    resultsContainer.appendChild(titleOfLists);
    renderToPage(...randomPersonData);
    // log('try to get to the names: ', randomPersonData.name)

})
