import playersList from "./players.mjs";
import gameboard from "./gameboard.mjs";
 

// console.log(playersList

const gameController = (function() {
    const playerOne = playersList.players[0];
    const playerTwo = playersList.players[1];
    let turn;
    
   console.log(playerOne.symbol)
    const placeSymbol = () => {
   
        gameboard.setBoardBox(0, playerOne.symbol);
        gameboard.setBoardBox(1, playerOne.symbol);
        gameboard.setBoardBox(2, playerOne.symbol);
        console.log(playerOne.symbol)
    }

    const changeTurns = () => {
        turn = !turn;
    } 
    
    function checkWinner(currentSymbol) {
        return winningCombinations.some((combination) => {
            return combination.every(index => {
                return gameboard.board[index].includes(currentSymbol)
            })
        })
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
        ]    

   
   return {placeSymbol, checkWinner, winningCombinations}


})()

gameController.placeSymbol()

console.log(gameController.checkWinner('O'))

console.log(gameboard.board)