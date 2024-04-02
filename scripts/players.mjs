const playersList = (function(){
    const players = [];
    
    // function createPlayer(player, symbol) {
    //   players.push({player, symbol})         
    // }

    function addPlayer(player) {
      // const playerOne = prompt('Player 1 name:');
      // const playerTwo = prompt('Player 2 name:');
      const symbolOne = 'x';
      const symbolTwo = 'X';

      // createPlayer(playerOne, symbolOne);
      // createPlayer(playerTwo, symbolTwo); 
      
      
      players.push(player)   
    }

    return {        
        players, 
        addPlayer       
    }
})();

playersList.addPlayer({name:'Bob', symbol: "X"});
playersList.addPlayer({name:'Tom', symbol: "O"});
// playersList.addPlayer();
// console.log(playersList);


// let test = playersList.players;
// console.log(test)

export default playersList