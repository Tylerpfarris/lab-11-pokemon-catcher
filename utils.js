import pokemon from './data.js';
import { incrementCapturedFunc, incrementEncounteredFunc } from './localStorageUtils.js';

let userTurn = 0;

export function genThreeRandomPokeFunc() {
    const randPoke = Math.floor(Math.random() * pokemon.length);
    return pokemon[randPoke];
}

export function findByUnderscoreId(array, id) {
    for (const item of array) {
        if (item._id === id) return item;
    }
}

export function displayThreePokeFunc() {
    userTurn++;

    let pokeOne = genThreeRandomPokeFunc();
    let pokeTwo = genThreeRandomPokeFunc();
    let pokeThree = genThreeRandomPokeFunc();

    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = genThreeRandomPokeFunc();
        pokeTwo = genThreeRandomPokeFunc();
        pokeThree = genThreeRandomPokeFunc();
    }

    const pokeImg1 = renderPokeImageFunc(pokeOne);
    const pokeImg2 = renderPokeImageFunc(pokeTwo);
    const pokeImg3 = renderPokeImageFunc(pokeThree);

    incrementEncounteredFunc(pokeOne._id);
    incrementEncounteredFunc(pokeTwo._id);
    incrementEncounteredFunc(pokeThree._id);

    const div = document.getElementById('pokemon');
    div.textContent = '';
    div.append(pokeImg1, pokeImg2, pokeImg3);
}


export function renderPokeImageFunc(pokemonItem) {
    const image = document.createElement('img');
    console.log(pokemonItem._id); 
    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCapturedFunc(pokemonItem._id);
        if (userTurn < 10){
            displayThreePokeFunc();
        } else {
            window.location = 'results';
        }
        
    });
    return image;
}
