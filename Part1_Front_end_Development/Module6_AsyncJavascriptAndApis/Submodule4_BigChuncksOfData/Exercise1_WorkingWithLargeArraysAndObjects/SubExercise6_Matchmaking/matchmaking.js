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


// get a lis of adults and (first name/Last Name/photo/country/age)
const adults = randomPersonData
                .filter(person => person.age>17)
                .map(person =>  [person.name, 
                                person.surname, 
                                person.photo, 
                                person.region, 
                                person.age, 
                                person.birthday]
                );

// create data for zodiac signs
const zodiacSignAndDate = 
[
    {'signName': 'Capricorn', 'signStartDate': '12/22', 'signEndDate': '1/19'},
    {'signName': 'Aquarius', 'signStartDate': '1/20', 'signEndDate': '2/18'},
    {'signName': 'Pisces', 'signStartDate': '2/19', 'signEndDate': '3/20'},
    {'signName': 'Aries', 'signStartDate': '3/21', 'signEndDate': '4/19'},
    {'signName': 'Taurus', 'signStartDate': '4/20', 'signEndDate': '5/20'},
    {'signName': 'Gemini', 'signStartDate': '5/21', 'signEndDate': '6/20'},
    {'signName': 'Cancer', 'signStartDate': '6/21', 'signEndDate': '7/23'},
    {'signName': 'Leo', 'signStartDate': '7/24', 'signEndDate': '8/22'},
    {'signName': 'Virgo', 'signStartDate': '8/23', 'signEndDate': '9/22'},
    {'signName': 'Libra', 'signStartDate': '9/23', 'signEndDate': '10/22'},
    {'signName': 'Scorpio', 'signStartDate': '10/23', 'signEndDate': '11/22'},
    {'signName': 'Sagittarius', 'signStartDate': '11/23', 'signEndDate': '12/21'}
]

// determine zodiac sign of each person and add this to adults array:





log('Persons', adults);
log('zodiacSignAndDate', zodiacSignAndDate);
