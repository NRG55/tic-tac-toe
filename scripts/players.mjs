const playersList = (function(){
    const players = [];

    function addPlayer(player) {
      players.push(player) 
    }

    return {        
        players, 
        addPlayer       
    }
})();

playersList.addPlayer({name:'Bob', symbol: "O"});
playersList.addPlayer({name:'Tom', symbol:"X"});


// let test = playersList.players;
// console.log(test)

export default playersList