# lab-11-pokemon-catcher

## html setup

1. three unique clickable pokemon images

**results**

1. table to generate caught and seen pokemon


## plan

import pokemon data


**functions**


setThreePokemonFun

- increment number of turns
- state poke 1,2,3 to getpokefunc
- use while loop for selecting unique pokemon
- declare images with render poke image function
- get div 'pokemon'
- clear div
- append images to div

getRandomPokemonFunc

- generate random number *  pokemonArr.length
- return pokemon`[randomIndex]`

renderPokeImageFunc

- create image element
- set image.src to pokeItem.url_image

- add a class to image element
- add event listener to image 'click'
- incrementCaught(pokemonItem._id)
- if user turn count is < 10 use setThreePokemonFunc
- else send to result page window.location = 'resuls'
-return image

findByIdFunc

- `for (let item of array) { 
    if (item._id === id) return item;`
}

**local storage utils**

- declare mage string

getPolkeStats

- state to stats parse and getItem MAGIC
- if !stats creatae an empty array 
    - set and strignify stats
- return stats

setPolkeStats

- setItem, stringify newstats

incrementEncounteredFunc

- declare stats to get poke stats func
- declare poke to findByUnderscoreId(stats, _id)
- if not seen initialize a new object
    - if (!poke) const new stats = id: id, seen: 1, caught 0
    - stats.push(newStat)
- poke.seen++
- setPokeStats(stats)

incrementCapturedFunc(id) 

- stats = getPokeStats
- check to see if ive seen this before
    - findByID
- increment poke.caught++
- setPokeStats
