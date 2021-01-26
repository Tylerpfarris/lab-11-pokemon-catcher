import { getPokeStats } from '../localStorageUtils.js';
import pokemon from '../pokemon.js';


export function renderDisplayDiv(pokemon) {
    const stats = getPokeStats();
    const resultDiv = document.createElement('div');

    const pokeImg = document.createElement('img');
    const pokeName = document.createElement('p');
    const capturedP = document.createElement('p');
    const encounteredP = document.createElement('p');

    pokeImg.src = pokemon.url_image;
    pokeName.textContent = pokemon.name;
    capturedP.textContent = stats.captured;
    encounteredP.textContent = stats.encountered;
    
    resultDiv.append(pokeImg, pokeName, capturedP, encounteredP);
}