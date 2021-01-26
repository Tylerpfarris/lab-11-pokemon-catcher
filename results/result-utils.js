
import pokemon from '../data.js';
import { findByUnderscoreId } from '../utils.js';


export function renderCapturedDiv(pokeStats) {
    if (pokeStats.captured > 0) {
        const mainDisplay = document.getElementById('mainSection');
        const divDisplay = document.createElement('div');
        mainDisplay.append(divDisplay);

        const newPokemon = findByUnderscoreId(pokemon, pokeStats._id);
       

        const pokeImg = document.createElement('img');
        const imgDiv = document.createElement('div');
        pokeImg.src = newPokemon.url_image;
        pokeImg.classList.add('poke-img');
        imgDiv.append(pokeImg);
        divDisplay.append(imgDiv);

        const pokeNameP = document.createElement('p');
        pokeNameP.textContent = newPokemon.pokemon;
        divDisplay.append(pokeNameP);

        const capturedP = document.createElement('p');
        capturedP.textContent = 'captured: ' + pokeStats.captured;
        divDisplay.append(capturedP);
        
        const encounteredP = document.createElement('p');
        encounteredP.textContent = 'encountered: ' + pokeStats.encountered;
        divDisplay.append(encounteredP);

        
        
        
    }
}