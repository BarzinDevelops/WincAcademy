/* Exercise: API Fun Time

Today you will get started with an API of your choice! For this assignment, 
the requirements are somewhat abstract, because you can fill in the entirety 
as you wish.

Requirements:
- As a user, I want to be invited to click a button when landing on the page.
- As a user, I want to see 1 joke, tweet, or pokemon after clicking the button.
- Check out at least 1 other feature of the API and make sure your user can use 
    it (be creative!) :).
        For example: DadJokes API can also retrieve pictures of dadjokes instead of text.
        PokemonAPI: can also show the pokemon's strengths and weaknesses.
                    Top Tips:

- Test the API! Before building an entire app, see if you can do a simple GET request 
with Postman. What do you expect to get in return?
- You may encounter a Cross-Origin Resource Sharing (CORS) error. See if and how you 
can solve this yourself before calling for help
- Use the API checklist (https://faq.wincacademy.nl/api-not-working-checklist/)

Some examples of APIs you can use:
    Pokeapi  (https://pokeapi.co/)
    API Documentation - tronalddump.io  (https://docs.tronalddump.io/)
    icanhazdadjoke  - (https://icanhazdadjoke.com/api#fetch-a-random-dad-joke)
*/


const log = console.log;
// get all the html elements:
const pokeBtn = document.getElementById('poke-btn');
const pokeInfo = document.getElementById('poke-info');
const pokeImgDiv = document.getElementById('poke-img-div');



const getPokeData = async () => {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
    const pokeman = await resp.json()
    log('pokeman',pokeman);
    // log('images', pokeman.sprites.front_default)
    setPokeImg(pokeman.sprites.front_default);
    const createInfo = {
        name: pokeman.name,
        height: pokeman.height,
        weight: pokeman.weight,

    }
    setPokeInfo(createInfo)
}
const setPokeInfo = async (pokemanInfo) =>{
    // pokeInfo.innerText = `
    // ${pokemanInfo.forEach(item => item.name, item.height, item.weight)}
    // `
}


const setPokeImg = async (pokeImgSrc) =>{

    const pokeImg = document.createElement('img');
    pokeImg.src = pokeImgSrc;
    pokeImgDiv.appendChild(pokeImg);
    log('pokeImgSrc: ', pokeImgSrc)
}

pokeBtn.addEventListener('click', ()=> {
    getPokeData();

});
