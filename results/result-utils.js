
import pokemon from '../data.js';
import { findByUnderscoreId } from '../utils.js';


export function renderCapturedDiv(pokeStats) {
    if (pokeStats.captured > 0 || pokeStats.encountered > 0) {
        const mainDisplay = document.getElementById('mainSection');
        const divDisplay = document.createElement('div');
        divDisplay.classList.add('display-div');
        mainDisplay.append(divDisplay);

        const newPokemon = findByUnderscoreId(pokemon, pokeStats._id);
       

        const pokeImg = document.createElement('img');
        const imgDiv = document.createElement('div');
        pokeImg.src = newPokemon.url_image;
        pokeImg.classList.add('poke-img');
        imgDiv.append(pokeImg);
        divDisplay.append(imgDiv);

        const pokeNameP = document.createElement('p');
        pokeNameP.classList.add('poke-name');
        pokeNameP.textContent = newPokemon.pokemon;
        divDisplay.append(pokeNameP);

        const capturedP = document.createElement('p');
        capturedP.classList.add('captured-p');
        capturedP.textContent = 'captured: ' + pokeStats.captured;
        divDisplay.append(capturedP);
        
        const encounteredP = document.createElement('p');
        encounteredP.classList.add('encountered-p');
        encounteredP.textContent = 'encountered: ' + pokeStats.encountered;
        divDisplay.append(encounteredP);

        
        
        
    }
}

// export function renderEncounteredResults(pokeStats) {
//     if (pokeStats.captured === 0 && pokeStats.encountered >= 1);
//     const divEncountered = document.getElementById('encountered-div');
//     const divEncounterDisplay = document.createElement('div');
//     divEncountered.append(divEncounterDisplay);

//     const newPokemon = findByUnderscoreId(pokemon, pokeStats._id);

//     const encounteredPokeP = document.createElement('p');
//     encounteredPokeP.textContent = newPokemon.pokemon;
//     divEncountered.append(encounteredPokeP);

//     const pokeImg = document.createElement('img');
//     const imgDiv = document.createElement('div');
//     pokeImg.src = newPokemon.url_image;
//     pokeImg.classList.add('poke-img');
//     imgDiv.append(pokeImg);
//     divEncountered.append(imgDiv);

    
// }