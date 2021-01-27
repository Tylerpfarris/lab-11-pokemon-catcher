const POKESTATS = 'POKESTATS';
import data from './data.js';
import pokemon from './data.js';
import { findByUnderscoreId } from './utils.js';

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!stats) {
        stats = [];
        localStorage.setItem(POKESTATS, JSON.stringify(stats));
    }
    return stats;
}

export function setPokeStats(newStats) {
    localStorage.setItem(POKESTATS, JSON.stringify(newStats));
}

export function incrementEncounteredFunc(_id) {
    const stats = getPokeStats();
    const poke = findByUnderscoreId(stats, _id);

    if (!poke) {
        const dataPokemon = findByUnderscoreId(pokemon, _id);
        const newStats = {
            name: dataPokemon.pokebase,
            _id: _id,
            encountered: 1,
            captured: 0,
            attack: dataPokemon.attack,
            defense: dataPokemon.defense,
            shape: dataPokemon.shape,
            typeOne: dataPokemon.type_1,
            typeTwo: dataPokemon.type_2
        };
        stats.push(newStats);
    } else {
        poke.encountered++;
        

    }
    setPokeStats(stats);
}

export function incrementCapturedFunc(_id) {
    const stats = getPokeStats();
    console.log(stats, 'stats');
    const poke = findByUnderscoreId(stats, _id);
    console.log(poke, 'poke');
    poke.captured++;

    setPokeStats(stats);
}

export function clearLocalStorage() {
    localStorage.setItem(POKESTATS, '[]');
}