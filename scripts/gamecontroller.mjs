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
        htmlController.playersInfo.style.visibility = 'visible';       
        htmlController.playerOneName.innerHTML =  playersList.players[0].name;
        htmlController.playerTwoName.innerHTML =  playersList.players[1].name; 

        htmlController.selectPlayer('O');          
    } 
    
    function handleClick(event) {
        if (gameOver) {
            return;        }         
        let boxIndex = parseInt(event.target.id);       
        if(gameboard.getGameboard()[boxIndex] !== "") {
          return;
        }
                
        gameboard.update(boxIndex, playersList.players[currentPlayerIndex].symbol);       
        let result = document.querySelector('.round-result');        
        if (isWin(playersList.players[currentPlayerIndex].symbol)) {
            gameOver = true;            
            result.style.display = 'grid'; 
            if (playersList.players[currentPlayerIndex].symbol === 'X') { 
                console.log(playersList.players[currentPlayerIndex].symbol)        
            htmlController.displayMessage(`Player 1 <br> 
                                          ${playersList.players[currentPlayerIndex].name} <br> Wins!`); 
            } 
            if (playersList.players[currentPlayerIndex].symbol === 'O') {
            htmlController.displayMessage(`Player 2 <br> 
                                          ${playersList.players[currentPlayerIndex].name} <br> Wins!`);
            }         
        } else if (isDraw()) {
            gameOver = true; 
            result.style.display = 'grid';              
            htmlController.displayMessage("It's a draw!");
        } 

        htmlController.selectPlayer(playersList.players[currentPlayerIndex].symbol);
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;        
    } 

    function restartGame() {
        let result = document.querySelector('.round-result')        
        for (let i = 0; i < 9; i++) {
            gameboard.update(i, "");
        } 
        
        htmlController.render();
        htmlController.gameMessage.innerHTML = "";
        result.style.display = 'none';        
        gameOver = false; 
    } 
    
    function exitGame() {
        location.reload();
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
           restartGame,
           exitGame
          }

})()

export default gameController;