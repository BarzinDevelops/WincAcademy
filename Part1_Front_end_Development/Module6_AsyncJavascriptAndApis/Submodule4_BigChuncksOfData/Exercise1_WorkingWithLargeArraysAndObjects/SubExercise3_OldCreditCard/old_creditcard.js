
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

const sortOnExpirationMonth = (card1, card2) => {
    if(card1.exp_year > card2.exp_year ) 
    {   
        // log('-----------------if gedeelte --------------------------')
        if(card1.exp_month < card2.exp_month )
            // log(`card1.exp_year: ${card1.exp_year} card2.exp_year: ${card2.exp_year}`+
            //     `\ncard1.exp_month: ${card1.exp_month} card2.exp_month: ${card2.exp_month}`)
            return 1
    } else return -1    
};

const getCurrentDateInTime = () =>{
    const date = new Date();
    const currentDate = new Date(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
    const dateOverOneYear = new Date(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()+1}`);
    // log(`currentDate=>`, currentDate.getTime())
    // log(`dateOverOneYear=>`, dateOverOneYear.getTime())
    // log(`days left=>`, (dateOverOneYear.getTime() - currentDate.getTime())/(24 * 3600 * 1000))
    return {'currentDateInTime': currentDate.getTime(), 'dateOverOneYearInTime': dateOverOneYear.getTime()};
}

const getExpiredDay = (currentTime, creditCardExpDate)=> {
    const getDiffInTime = creditCardExpDate - currentTime;
    return Math.round(getDiffInTime / (24 * 3600 * 1000));
}

const customSelectedPeople = peopleData => {
    
    const now = new Date().getTime();
    let cc_exp_year = null;
    let cc_exp_month = null;
    let cc_exp_day = '1';
    return peopleData
            .filter(person => person.age >= 18)
            .filter(adults => {
                cc_exp_year = '20'+ adults.credit_card.expiration.split('/')[1];
                cc_exp_month = adults.credit_card.expiration.split('/')[0];
                const creditCardExpDate = new Date(`${cc_exp_month}/${cc_exp_day}/${cc_exp_year}`).getTime();
                const datesInTime = getCurrentDateInTime();
                const currentTime = datesInTime.currentDateInTime;
                const overOneYearTime = datesInTime.dateOverOneYearInTime;
                // log('datesInTime ==>', datesInTime);
                if(creditCardExpDate >  currentTime && creditCardExpDate < overOneYearTime){
                    // log('Days befor expire:', getExpiredDay(currentTime, creditCardExpDate));
                    adults.daysBeforeExpiration = getExpiredDay(currentTime, creditCardExpDate);
                    return adults
                }
            })      
            
}



// customSelectedPeople(randomPersonData).sort(sortOnExpirationMonth);


const unSortedDataMonth = customSelectedPeople(randomPersonData);
const sortedDataMonth = customSelectedPeople(randomPersonData).sort((a,b)=> {

    if(a.daysBeforeExpiration > b.daysBeforeExpiration){
        log('a is bigger than b: ', a.daysBeforeExpiration, b.daysBeforeExpiration)
        return 1
    } else{
        log('b is bigger than a: ', b.daysBeforeExpiration, a.daysBeforeExpiration)
        return -1

    }
    // return a.daysBeforeExpiration < b.daysBeforeExpiration ? 1 : -1;
});

sortedDataMonth.forEach(i => log(i.daysBeforeExpiration))

// unSortedDataMonth.forEach(i => log(i.daysBeforeExpiration))
// sortedDataMonth.forEach(i => log('sorted: ',i.daysBeforeExpiration))
// log('unSortedDataMonth', unSortedDataMonth)
// log('Unsorted:', unSortedDataMonth.forEach(i=>log(`year: ${i.exp_year}. month: ${i.exp_month}`)))
// log('Unsorted length:', unSortedDataMonth.length)
log('----------------------------------------------------------------------------\n')
// const sortedDataMonth = customSelectedPeople(randomPersonData).sort(sortOnExpirationMonth);
// log('Sorted:', sortedDataMonth.forEach(i=>log(`year: ${i.exp_year}. month: ${i.exp_month}`)))
// log('Sorted length:', sortedDataMonth.length)





const renderToPage = (...selectedPeople) => {
    // log('selectedPeople', selectedPeople)
    selectedPeople.forEach(person => {
     
        const persContainer = document.createElement('div');
        persContainer.classList.add('person-card');
        resultsContainer.appendChild(persContainer);

        const name = document.createElement('li');
        name.textContent = `Name: ${person.name}`;
        name.style.color = 'purple';

        const surname = document.createElement('li');
        surname.textContent = `Surname: ${person.surname}`;
        surname.style.color = 'blue';

        const age = document.createElement('li');
        age.textContent = `Age: ${person.age}`;
        age.style.color = 'purple';

        const phone_number = document.createElement('li');
        phone_number.textContent = `Phone-number: ${person.phone}`;
        phone_number.style.color = 'blue';

        const creditcard_number = document.createElement('li');
        creditcard_number.textContent = `Creditcard number: ${person.credit_card.number}`;
        creditcard_number.style.color = 'purple';

        const creditcard_expiration_date = document.createElement('li');
        creditcard_expiration_date.textContent = `Creditcard expiration date: ${person.credit_card.expiration}`;
        creditcard_expiration_date.style.color = 'blue';
        
        persContainer.appendChild(name);
        persContainer.appendChild(surname);
        persContainer.appendChild(age);
        persContainer.appendChild(phone_number);
        persContainer.appendChild(creditcard_number);
        persContainer.appendChild(creditcard_expiration_date);

    });
};

const oldCreditCardBtn = document.getElementById('old-creditcard');
oldCreditCardBtn.addEventListener('click', ()=>{
    resultsContainer.replaceChildren();
    titleOfLists.textContent = oldCreditCardBtn.innerText;
    resultsContainer.appendChild(titleOfLists);
    // renderToPage(...sortedData);
});
