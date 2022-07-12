
const navContainer = document.getElementById('nav-container');
const movieFilters = navContainer.querySelectorAll('[name="mv-filter"]');

const mainContainer = document.querySelector('.main-container');
const moviesList = document.getElementById('mv-list');


movieFilters.forEach(item => {
    console.log(item);
    item.addEventListener('input', ev =>{
        // console.log("this event has happend: ", ev)
        console.log("this event has target.value.defaultValue: ", ev.target.defaultValue)
        // console.log("this is event of item: ", ev.currentTarget)
    })
});

