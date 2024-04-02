import playersList from "./players.mjs";
import gameboard from "./gameboard.mjs";
 

// console.log(playersList)
let playerOneTurn;
playerOneTurn = !playerOneTurn;
console.log(playerOneTurn)

const gameController = (function() {
    const playerOne = playersList.players[0];
    const playerTwo = playersList.players[1];
    let playerOneTurn;
   
    function startGame() {
       const currentPlayer = playerOneTurn ? playerOne : playerTwo;
       placeSymbol(3, currentPlayer.symbol);
       placeSymbol(2, currentPlayer.symbol);
       changeTurn()
       console.log(currentPlayer.symbol)
    }
    
//    console.log(playerOne.symbol)
    const placeSymbol = () => {
   
        gameboard.setBoardBox(0, playerOne.symbol);
        gameboard.setBoardBox(1, playerOne.symbol);
        gameboard.setBoardBox(2, playerTwo.symbol);
        gameboard.setBoardBox(3, playerTwo.symbol);
        gameboard.setBoardBox(4, playerOne.symbol);
        gameboard.setBoardBox(5, playerTwo.symbol);
        gameboard.setBoardBox(6, playerTwo.symbol);
        gameboard.setBoardBox(7, playerTwo.symbol);
        gameboard.setBoardBox(8, playerOne.symbol);
        // console.log(playerOne.symbol)
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
        if (isWin()) {
            console.log('WINNER!!')
        } 

        if (isDraw()) {
            console.log('DRAW')
        }

        changeTurn();
    }

       

   
   return {placeSymbol, 
    isWin, 
    isDraw, 
    winningCombinations,
    checkGameState,
    startGame
}



})()

gameController.placeSymbol()

console.log(gameController.isWin('O'))

console.log(gameboard.board)
console.log(gameController.isDraw())
console.log(gameController.checkGameState())

gameController.startGame()
gameController.startGame()