
const navContainer = document.getElementById('nav-container');
const movieFilters = navContainer.querySelectorAll('[name="mv-filter"]');

const mainContainer = document.querySelector('.main-container');



movieFilters.forEach(item => {
    // console.log(item);
    item.addEventListener('input', ev =>{
        // console.log("this event has happend: ", ev)
        // console.log("this event has target.value.defaultValue: ", ev.target.defaultValue)
        // console.log("this is event of item: ", ev.currentTarget)
    })
});

const addMoviesToDom = (moviesData) => {
    const moviesListUl = document.getElementById('mv-list');
    moviesData
    .map(movie => movie)
    .forEach(movie =>  {
        let newItem = document.createElement('li');
        const img = document.createElement('img');
        img.src = movie.poster
        newItem.appendChild(img)
        moviesListUl.appendChild(newItem);
    })

}
addMoviesToDom(movies);