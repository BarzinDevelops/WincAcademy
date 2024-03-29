
/* Sub exercise: Capricorn women - 3 points
    Make a list of people:
        show their first and last name and photo
        sort the list by their first name
        every person on that list must
        be a woman
        be older than 30 (1990 or older)
        be a Capricorn (birthday from December 22 to January 19) */



let capriWoman = [];
randomPersonData.map(person =>  {
let month = Number(person.birthday.dmy.split("/")[1]);
let day = Number(person.birthday.dmy.split("/")[0]);
if(person.gender === "female" & person.age > 30){
    if(day >=22 & month === 12 || day <= 19 & month === 1){
        capriWoman = [...capriWoman, 
            {   
                name:       person.name, 
                surname:    person.surname, 
                photo:      person.photo,
                age:        person.age,
                birthday:   person.birthday.dmy
            }
        ];
    }
}
});


// This function gets called from renderCapriWoman() to sort the names in capriWoman
// before it gets rendered to page. 
const sortNames = (pers1, pers2) => pers1.name > pers2.name ? 1 : -1;

const renderCapriWoman = (...receivedCapriWomen) => {

    receivedCapriWomen.sort(sortNames);
    receivedCapriWomen.forEach(women => {

    const persContainer = document.createElement('div');
    persContainer.classList.add('person-card');
    resultsContainer.appendChild(persContainer);

    const newItem_name = document.createElement('li');
    newItem_name.textContent = `Name: ${women.name} ${women.surname}`;
    newItem_name.style.color = 'purple';

    const newItem_age = document.createElement('li');
    newItem_age.textContent = `Age: ${women.age}`;
    newItem_age.style.color = 'blue';

    const newItem_birthday = document.createElement('li');
    newItem_birthday.textContent = `Birthday: ${women.birthday}`;
    newItem_birthday.style.color = 'purple';

    const newItem_photo = document.createElement('img'); 
    newItem_photo.classList.add('person-photo');
    newItem_photo.src = women.photo;

    persContainer.appendChild(newItem_name);
    persContainer.appendChild(newItem_photo);
    persContainer.appendChild(newItem_age);
    persContainer.appendChild(newItem_birthday);

});
};

// creating btn for Capricorn Women
const capricornWomenBtn = document.getElementById('capricornwomen');

//creates button event with rendering of data to page. (implementatin in main.js)
btnEventCreator(capricornWomenBtn, renderCapriWoman, capriWoman);



// ----------------------------------------------------------//