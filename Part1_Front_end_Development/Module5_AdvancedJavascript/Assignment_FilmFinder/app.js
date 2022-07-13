
const navContainer = document.getElementById('nav-container');
const mvRadioBtnFilters = navContainer.querySelectorAll('[name="mv-filter"]');

const mainContainer = document.querySelector('.main-container');


mvRadioBtnFilters.forEach(item => {
    item.addEventListener('change', ev =>{
        // console.log("radiobtn event has triggered")
        handleOnChangeEvent(ev);
    })
});

const addMoviesToDom = (moviesData) => {
    const moviesListUl = document.getElementById('mv-list');
    moviesData
    .map(movie => movie)
    .forEach(movie =>  {
        let newItem = document.createElement('li');
        newItem.id = 'mv-list-item'
        const img = document.createElement('img');
        img.src = movie.poster
        newItem.appendChild(img)
        moviesListUl.appendChild(newItem);
    })

}
// addMoviesToDom(movies);


const handleOnChangeEvent = event => {
    // console.log("handleOnChangeEvent() event.target", event.target)
    // console.log("handleOnChangeEvent() event.target", event.target.id)

    switch (event.target.id) {
        case 'latest-mv':
            console.log(filterMovies(event.target.value))
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'av-mv':
            console.log(filterMovies(event.target.value))
            break;
        case 'xm-mv':
            console.log(filterMovies(event.target.value))
            break;
        case 'pr-mv':
            console.log(filterMovies(event.target.value))
            break;
        case 'bat-mv':
            console.log(filterMovies(event.target.value))
            break;
        default:
            console.log("the filter in switch() doesnt seem to work!!")
            break;
    }
}
/* 
Write the filterMovies function. 
Check if the word appears in 
the title of the movie. You will now only have a list of 
the filtered movies over. As the last step, 
you want to call this filterMovies, the function from
 step 4 addMoviestoDom(), but now with your filtered movies list, 
 instead of all the movies list.
*/

const filterMovies = wordInMovie =>{
   return movies
    .filter(movie => movie.title.toLowerCase().includes(wordInMovie) || 
    Number(movie.year) >= Number(wordInMovie));
}
