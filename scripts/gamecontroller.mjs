import playersList from "./players.mjs";
import gameboard from "./gameboard.mjs";
 


let playerOneTurn;


const gameController = (function() {
    const playerOne = playersList.players[0].symbol;
    const playerTwo = playersList.players[1].symbol;
    let currentPlayer;

     function getCurrentPlayer() {
      
       currentPlayer = playerOneTurn ? playerOne : playerTwo;
    
       console.log(currentPlayer)
       changeTurn()
    
      
     }    
 

    function placeSymbol(index, symbol) { 
        symbol = getCurrentPlayer(); 
        
         console.log(player) 
   
        gameboard.setBoardBox(index, player);
        console.log(player) 
        
    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];    

    const changeTurn = () => {
        playerOneTurn = !playerOneTurn;
    } 
    
    function isWin(currentSymbol) {
        return winningCombinations.some((combination) => {
            return combination.every(index => {
                return gameboard.board[index].includes(currentSymbol)
            })
        })
    }

    function isDraw() {
        return gameboard.board.every(box => {
            return box.includes('O') || box.includes('X')
        })         
    }

    function checkGameState() {
        if (isWin('O')) {
            console.log('WINNER!!')
        } else if (isDraw()) {
            console.log('DRAW')
        } else {
            changeTurn();            
        }        
    }

       

   
   return {placeSymbol, 
    isWin, 
    isDraw, 
    winningCombinations,
    checkGameState,
    getCurrentPlayer
    
}



})()
gameController.getCurrentPlayer();
// gameController.getCurrentPlayer();
gameController.getCurrentPlayer()
// console.log(gameController.currentPlayer);
// console.log(gameController.getCurrentPlayer()); 

// console.log(gameController.isWin('O'))

console.log(gameboard.board)
// console.log(gameController.isDraw())
// console.log(gameController.checkGameState())

// gameController.startGame()
// gameController.startGame()