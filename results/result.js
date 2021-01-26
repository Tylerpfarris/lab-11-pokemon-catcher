import { getPokeStats, clearLocalStorage } from '../localStorageUtils.js';
import { renderCapturedDiv } from './result-utils.js';




const stats = getPokeStats();
const refreshButton = document.getElementById('refresh-button');

for (const item of stats) {
    renderCapturedDiv(item);
}



refreshButton.addEventListener('click', () => {
    clearLocalStorage();
    window.location = '../';
});