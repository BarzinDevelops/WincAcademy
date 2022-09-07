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





// =================== Matchmaking ============================

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

const getZodiacSign = (day, month) => {
    if(day >= 22 && month === 12) return 'Capricorn';
    if(day <= 19 && month === 1) return 'Capricorn';

    if(day >= 20 && month === 1) return 'Aquarius';
    if(day <= 18 && month === 2) return 'Aquarius';


    if(day >= 19 && month === 2) return 'Pisces';
    if(day <= 20 && month === 3) return 'Pisces';

    if(day >= 21 && month === 3) return 'Aries';
    if(day <= 19 && month === 4) return 'Aries';

    if(day >= 20 && month === 4) return 'Taurus';
    if(day <= 20 && month === 5) return 'Taurus';

    if(day >= 21 && month === 5) return 'Gemini';
    if(day <= 20 && month === 6) return 'Gemini';

    if(day >= 21 && month === 6) return 'Cancer';
    if(day <= 23 && month === 7) return 'Cancer';

    if(day >= 24 && month === 7) return 'Leo';
    if(day <= 22 && month === 8) return 'Leo';

    if(day >= 23 && month === 8) return 'Virgo';
    if(day <= 22 && month === 9) return 'Virgo';

    if(day >= 23 && month === 9) return 'Libra';
    if(day <= 22 && month === 10) return 'Libra';

    if(day >= 23 && month === 10) return 'Scorpio';
    if(day <= 22 && month === 11) return 'Scorpio';

    if(day >= 23 && month === 11) return 'Sagittarius';
    if(day <= 21 && month === 12) return 'Sagittarius';
}


const matchMaker = (candit) =>{
    // determine wich zodiac signs are a match
    //used this source for matches => https://www.self.com/story/zodiac-matches-that-make-the-best-couples

    




}

    // =============== End Matchmaking ==========================