import { getPokeStats, clearLocalStorage } from '../localStorageUtils.js';
import { renderCapturedDiv } from './result-utils.js';
import { makeEncounteredArr, makeCapturedArr, makeLabelArr, makeAtkArr, makeDefArr } from './munge-utils.js';



const stats = getPokeStats();
const refreshButton = document.getElementById('refresh-button');

for (const item of stats) {
    renderCapturedDiv(item);
}



refreshButton.addEventListener('click', () => {
    clearLocalStorage();
    window.location = '../';
});

Chart.defaults.global.defaultFontColor = 'white';

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: makeLabelArr(stats),
        datasets: [{
            label: '# ENCOUNTERED',
            data: makeEncounteredArr(stats),
            backgroundColor: 
                'rgba(255, 200, 255, 0.5)'
                

            ,
            borderColor: 
                'rgba(10, 10, 10, 0.1)',

            borderWidth: 1
        
        },
        {
        
            label: '# CAPTURED',
            data: makeCapturedArr(stats),
            backgroundColor: 
                'rgba(10, 150, 132, 0.7)'


               
                
            ,
            borderColor: 
                'rgba(10, 150, 132, 0.7)',
            borderWidth: 1
        }]
    },
    options: {
        // responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});

var ctxTwo = document.getElementById('attack-defense-chart').getContext('2d');
var myAtkDefChart = new Chart(ctxTwo, {
    type: 'radar',
    
    data: {
        labels: makeLabelArr(stats),
        datasets: [{
            label: 'ATTACK',
            data: makeAtkArr(stats),
            backgroundColor: 
                'rgba(200, 36, 89, 0.5)',
            borderColor: 
                'rgba(200, 36, 89, 1)',
            borderWidth: 1
        
        },
        {
        
            label: 'DEFENSE',
            data: makeDefArr(stats),
            backgroundColor: 
                'rgba(38, 194, 129, 0.5)',
            borderColor: 
                'rgba(38, 194, 129, 1)',
            borderWidth: 1
        }]
    },
    options: {
        borderColor: 'rgba(255, 255, 255, 1.0)',
            
            
        
    }
});

// var ctxThree = document.getElementById('type-chart').getContext('2d');
// var myTypeChart = new Chart(ctxThree, {
//     type: 'polarArea',
//     data: {
//         labels: makeTypeOneArr(stats),
//         datasets: [{
//             label: 'Species Type One',
//             data: makeTypeOneArr(stats),
//             backgroundColor: 
//                 'rgba(200, 36, 89, 0.5)',
//             borderColor: 
//                 'rgba(200, 36, 89, 1)',
//             borderWidth: 1
        
//         },
//         {
        
//             label: 'Species Type Two',
//             data: makeTypeTwoArr(stats),
//             backgroundColor: 
//                 'rgba(38, 194, 129, 0.5)',
//             borderColor: 
//                 'rgba(38, 194, 129, 1)',
//             borderWidth: 1
//         }]
//     },
//     options: {
//         gridLines: {
//             lineWidth: 2,
//             color: 'white'
//         },
//         pointLabels: {
//             fontSize: 18,
//             fontStyle: 'bold'
//         }
            
            
        
//     }
// });