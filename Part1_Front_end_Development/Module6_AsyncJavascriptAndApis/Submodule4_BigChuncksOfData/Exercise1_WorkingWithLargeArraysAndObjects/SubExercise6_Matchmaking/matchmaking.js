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


const calcZodiacSign = (birthDate)=>{
    let fullDate = birthDate.split('/');
    // let month = Number(fullDate[0]);
    // let day = Number(fullDate[1]);
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

log('adults', adults)
// log('adults', randomPersonData)



// determine zodiac sign of each person and add this to adults array:
// 1- get birthday and save month and day





// log('Persons', adults);
// log('zodiacSignAndDate', zodiacSignAndDate);




