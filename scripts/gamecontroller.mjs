import playersList from "./players.mjs";
import gameboard from "./gameboard.mjs";
import htmlController from "./htmlcontroller.mjs";

const gameController = (function() {
   
    let gameOver;
    let currentPlayerIndex;

    function handleClick(event) {
        let boxIndex = parseInt(event.target.id);
        
        if(gameboard.getGameboard()[boxIndex] !== "") {
          return;
        }
        gameboard.update(boxIndex, playersList.players[currentPlayerIndex].symbol);       
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;        
    } 

    function startGame() {       
        playersList.players = [
            playersList.createPlayer(document.querySelector("#player1").value, "X"),
            playersList.createPlayer(document.querySelector("#player2").value, "O"),
        ]
        currentPlayerIndex = 0;
        gameOver = false;  
        htmlController.render();
        const boardBoxes = document.querySelectorAll('.board-box')
        boardBoxes.forEach((box) => {
            box.addEventListener('click', handleClick);           
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
        ];     
    
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
   return {startGame,
           handleClick
          }

})()

export default gameController