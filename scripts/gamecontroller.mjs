import playersList from "./players.mjs";
import gameboard from "./gameboard.mjs";
import htmlController from "./htmlcontroller.mjs";

const gameController = (function() {   
    let gameOver;
    let currentPlayerIndex;    

    function startGame() {       
        playersList.players = [
            playersList.createPlayer(document.querySelector("#player1").value, "X"),
            playersList.createPlayer(document.querySelector("#player2").value, "O"),
        ];

        currentPlayerIndex = 0;
        gameOver = false;
         
        htmlController.render();
        const boardBoxes = document.querySelectorAll('.board-box')
        boardBoxes.forEach((box) => {
            box.addEventListener('click', handleClick);                
        }) 
        
        htmlController.playersForm.style.display = 'none'; 
        htmlController.gameBoardContainer.style.display = 'block';   
    } 
    
    function handleClick(event) {
        if (gameOver) {
            return;        }         
        let boxIndex = parseInt(event.target.id);       
        if(gameboard.getGameboard()[boxIndex] !== "") {
          return;
        }
                
        gameboard.update(boxIndex, playersList.players[currentPlayerIndex].symbol);       
        let result = document.querySelector('.round-result')
        if (isWin(playersList.players[currentPlayerIndex].symbol)) {
            gameOver = true;
            
            result.style.display = 'block';
            console.log(result)
            htmlController.displayMessage(`${playersList.players[currentPlayerIndex].name}'WON!!!!!'`);           
        } else if (isDraw()) {
            gameOver = true; 
            result.style.display = 'block';     
            htmlController.displayMessage("It's a draw!");

        }    
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;        
    } 

    function restartGame() {
        let result = document.querySelector('.round-result')
        console.log('test')
        for (let i = 0; i < 9; i++) {
            gameboard.update(i, "");
        } 
        console.log(gameboard.board)
        htmlController.render();
        htmlController.gameMessage.innerHTML = "";
        result.style.display = 'none';
        
        gameOver = false; 
    }    
    
    function isWin(currentSymbol) {
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
    
   return {startGame,
           handleClick,
           restartGame
          }

})()

export default gameController;