
const navContainer = document.getElementById('nav-container');
const mvRadioBtnFilters = navContainer.querySelectorAll('[name="mv-filter"]');

const mainContainer = document.querySelector('.main-container');
const moviesListUl = document.getElementById('mv-list');

mvRadioBtnFilters.forEach(item => {
    item.addEventListener('input', ev =>{
        handleOnChangeEvent(ev);
    })
});

const addMoviesToDom = (moviesData) => {
    moviesListUl.innerHTML = ""
    
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
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'av-mv':
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'xm-mv':
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'pr-mv':
            addMoviesToDom(filterMovies(event.target.value))
            break;
        case 'bat-mv':
            addMoviesToDom(filterMovies(event.target.value))
            break;
        default:
            console.log("the filter in switch() doesnt seem to work!!")
            break;
    }
}

const filterMovies = wordInMovie =>{
    console.log(movies)
   return movies
    .filter(movie => movie.title.toLowerCase().includes(wordInMovie) || 
    Number(movie.year) >= Number(wordInMovie));
}
