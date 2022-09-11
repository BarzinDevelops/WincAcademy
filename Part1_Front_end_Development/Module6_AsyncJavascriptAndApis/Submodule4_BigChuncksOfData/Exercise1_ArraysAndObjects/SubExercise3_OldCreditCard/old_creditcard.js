
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

const getCurrentDateInTime = () =>{
    const date = new Date();
    const currentDate = new Date(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
    const dateOverOneYear = new Date(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()+1}`);
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
                if(creditCardExpDate >  currentTime && creditCardExpDate < overOneYearTime){
                    adults.daysBeforeExpiration = getExpiredDay(currentTime, creditCardExpDate);
                    return adults;
                };
            });      
};

// sorting all the adults based on expiration dates closest to current date till the next year.
const sortedOnCardExpiration = customSelectedPeople(randomPersonData).sort((a,b)=> a.daysBeforeExpiration > b.daysBeforeExpiration ? 1 : -1);


// rendering all the cards which contain the info about each person selected on creditcard expiration date.
const renderToPage = (...selectedPeople) => {
    selectedPeople.forEach(person => {
        const persContainer = document.createElement('div');
        persContainer.classList.add('person-card');
        resultsContainer.appendChild(persContainer);

        const name = document.createElement('li');
        name.textContent = `Name: ${person.name} ${person.surname}`;
        name.style.color = 'purple';

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
        persContainer.appendChild(phone_number);
        persContainer.appendChild(creditcard_number);
        persContainer.appendChild(creditcard_expiration_date);
    });
};

// creating btn for Old Creditcard data.
const oldCreditCardBtn = document.getElementById('old-creditcard');

//creates button event with rendering of data to page. (implementatin in main.js)
btnEventCreator(oldCreditCardBtn, renderToPage, sortedOnCardExpiration);