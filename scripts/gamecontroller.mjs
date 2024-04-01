import playersList from "./players.mjs"
 

// console.log(playersList)

const gameController = (function() {
    const players = playersList.players
    console.log(players)
    return players
})()

console.log(gameController.players)