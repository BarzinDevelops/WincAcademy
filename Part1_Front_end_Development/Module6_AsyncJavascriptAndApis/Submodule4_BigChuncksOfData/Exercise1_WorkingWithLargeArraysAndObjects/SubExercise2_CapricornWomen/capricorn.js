
/* Sub exercise: Capricorn women - 3 points
    Make a list of people:
        show their first and last name and photo
        sort the list by their first name
        every person on that list must
        be a woman
        be older than 30 (1990 or older)
        be a Capricorn (birthday from December 22 to January 19) */

const capricornWomenBtn = document.getElementById('capricornwomen');

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

const renderCapriWoman = (...myRest) => {
myRest.forEach(element => {

    const persContainer = document.createElement('div');
    persContainer.classList.add('capri-women');
    resultsContainer.appendChild(persContainer);

    const newItem_name = document.createElement('li');
    newItem_name.textContent = `Name: ${element.name}`;
    newItem_name.style.color = 'purple';

    const newItem_surname = document.createElement('li');
    newItem_surname.textContent = `Surname: ${element.surname}`;
    newItem_surname.style.color = 'blue';

    const newItem_age = document.createElement('li');
    newItem_age.textContent = `Age: ${element.age}`;
    newItem_age.style.color = 'purple';

    const newItem_birthday = document.createElement('li');
    newItem_birthday.textContent = `Birthday: ${element.birthday}`;
    newItem_birthday.style.color = 'blue';

    const newItem_photo = document.createElement('img'); 
    newItem_photo.classList.add('person-photo');
    newItem_photo.src = element.photo;

    persContainer.appendChild(newItem_name);
    persContainer.appendChild(newItem_surname);
    persContainer.appendChild(newItem_photo);
    persContainer.appendChild(newItem_age);
    persContainer.appendChild(newItem_birthday);

});
};

// log(randomPersonData);
// log(`getCapriWoman`, capriWoman);

capricornWomenBtn.addEventListener('click', ()=>{
resultsContainer.replaceChildren();
titleOfLists.textContent = capricornWomenBtn.innerText;
resultsContainer.append(titleOfLists);
renderCapriWoman(...capriWoman);
});



// ----------------------------------------------------------//