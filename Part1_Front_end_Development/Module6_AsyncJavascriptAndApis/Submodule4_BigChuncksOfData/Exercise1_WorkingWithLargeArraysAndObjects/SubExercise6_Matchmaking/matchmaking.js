/* Sub-exercise: matchmaking - 6 points
   This exercise is the hardest.
    When we press the button for this command, 
    we see a list of all people.
    the list is sorted by first name
    we only want to see adults of each person we see:
        first name Last Name
        photo
        country
        age
        zodiac sign (Capricorn, Libra etc)
    With each person, we see a button with the title "find matches".
    If we press that button:
        the big list of people disappears
        we see the person clicked on top
        below we see a list of "matches" of that person
        someone is not allowed to match himself
    How do we determine a match? We do this based on zodiac signs. 
    Whether people live in another continent, are 30 years old or don't speak each other's language is not important, love conquers all borders ;-)
    How do we determine which zodiac sign someone is? 
    Do that with this information.
    You may come up with your own list of good matches for each sign, 
    or you could use a list from the internet.  */

// determine zodiac sign of each person and add this to adults array:
// 1- get birthday and save month and day
const calcZodiacSign = (birthDate)=>{
    let fullDate = birthDate.split('/');
    // getZodiacSign -> main.js
    return getZodiacSign(Number(fullDate[1]), Number(fullDate[0]));
}
    

// get a lis of adults and (first name/Last Name/photo/country/age)
const adults = randomPersonData
    .filter(person => person.age>17)
    .map(person => { 
      return  {
            name: person.name, 
            surname: person.surname, 
            country: person.region, 
            age : person.age, 
            birthday : person.birthday.dmy,
            zodiacSign: calcZodiacSign(person.birthday.mdy),
            photo : person.photo,
        }
            
    });

// log('adults', adults)


const getMyMatch = (personToMatch) =>{
    // log('personToMatch', personToMatch)
    return adults.filter(adult => {
        if(personToMatch.name !== adult.name){


            if(personToMatch.zodiacSign === 'Virgo'){
                if(adult.zodiacSign === 'Taurus' || 
                adult.zodiacSign === 'Virgo') 
                return adult
            }




            
            
        }
    })
}




const matchMakingBtn = document.getElementById('matchmaking');
const renderMatchmaking = (...candidatesArr) => {
    resultsContainer.replaceChildren();
    cardWrapper = document.createElement('div');
    cardWrapper.classList.add('card-wrapper');
    candidatesArr.forEach(candit => {
        let newCard = document.createElement('div');
        newCard.classList.add('candidate-card');

        let cardInfoPhoto = document.createElement('div');
        cardInfoPhoto.className = 'card-info-photo';

        let candidatePhoto = document.createElement('img');
        candidatePhoto.className = 'candidate-photo';
        
        candidatePhoto.src = candit.photo
        
        let candidateInfo = document.createElement('span');
        candidateInfo.className = 'candidate-info';
        
        
  
        candidateInfo.innerText = 
        `   Name: ${candit.name} ${candit.surname}
            country: ${candit.country}
            age: ${candit.age}
            birthday: ${candit.birthday}
            zodiacSign: ${candit.zodiacSign}
        `

        let matchBtn = document.createElement('button');
        matchBtn.innerText = '♥️♥️♥️ Find My Match ♥️♥️♥️';
        matchBtn.className = 'match-btn';


        cardInfoPhoto.append(candidateInfo, candidatePhoto);
        newCard.append(cardInfoPhoto, matchBtn);
        cardWrapper.append(newCard);
        
        
        matchBtn.addEventListener('click', ()=>{
            // log('candit.photo', candit.photo)
            let foundMatch = getMyMatch(candit);
            // log('candit.zodiacSign', candit.zodiacSign)
            log('foundMatch', foundMatch)
            renderMatchmaking(...foundMatch);
        })
    });
    
    resultsContainer.appendChild(cardWrapper);
    
}
btnEventCreator(matchMakingBtn, renderMatchmaking, adults);





