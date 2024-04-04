import gameboard from "./gameboard.mjs";
import gameController from "./gamecontroller.mjs";

const htmlController = (() => {
    const buttonStart = document.querySelector('#button-start');
    const buttonRestart = document.querySelector('#button-restart');    
    const gameBoard = document.querySelector(".gameboard"); 
   
    const gameMessage = document.querySelector(".game-message");   

    function render() { 
        let boardHtml = "";     

        gameboard.board.forEach((box, index) => {
            boardHtml += `<div class="board-box" id="${index}">${box}</div>`            
        })
        gameBoard.innerHTML = boardHtml;
        
        const boardBoxes = document.querySelectorAll('.board-box')
        boardBoxes.forEach((box) => {
            box.addEventListener('click', gameController.handleClick);           
        })
    }
    
    function displayMessage(message) {
        gameMessage.innerHTML = message;
    }

    buttonStart.addEventListener('click', () => {
        gameController.startGame();
    })
    
    buttonRestart.addEventListener('click', () => {
        gameController.restartGame();
    })
    return {       
        render,
        displayMessage,
        gameMessage,       
    }
})()

export default htmlController;