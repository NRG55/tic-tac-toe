const playersList = (function(){
    const players = [];
    
    // function createPlayer(player, symbol) {
    //   players.push({player, symbol})         
    // }

    function addPlayer(player) {
      // const playerOne = prompt('Player 1 name:');
      // const playerTwo = prompt('Player 2 name:');
      const symbolOne = 'X';
      const symbolTwo = 'O';

      // createPlayer(playerOne, symbolOne);
      // createPlayer(playerTwo, symbolTwo); 
      
      
      players.push(player)   
    }

    return {        
        players, 
        addPlayer       
    }
})();

playersList.addPlayer({name:'Bob', symbol: "O"});
playersList.addPlayer({name:'Tom', symbol:"X"});
// playersList.addPlayer();
// console.log(playersList);


// let test = playersList.players;
// console.log(test)

export default playersList