const POKESTATS = 'POKESTATS';
import { findByUnderscoreId } from './utils.js';

export function getPokeStats() {
    let stats = JSON.parse(localStorage.getItem(POKESTATS) || '[]');

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
        const newStats = {
            _id: _id,
            encountered: 1,
            captured: 0,
        };
        stats.push(newStats);
    } else {
        poke.encountered++;
        

    }
    setPokeStats(stats);
}

export function incrementCapturedFunc(_id) {
    const stats = getPokeStats();

    const poke = findByUnderscoreId(stats, _id);

    poke.captured++;

    setPokeStats(stats);
}

export function clearLocalStorage() {
    localStorage.setItem(POKESTATS, '[]');
}