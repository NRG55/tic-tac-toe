import gameboard from "./gameboard.mjs";
import gameController from "./gamecontroller.mjs";

const htmlController = (() => {
    const buttonStart = document.querySelector('#button-start');
    const buttonRestart = document.querySelector('#button-restart');    
    const gameBoard = document.querySelector(".gameboard"); 
    
    const gameMessage = document.querySelector(".round-result");   

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

    function updateSymboles() {
        const boardBoxes = document.querySelectorAll('.board-box');
        
        boardBoxes.forEach((box) => {
                if (box.innerHTML === 'X')
                box.classList.add('board-box-x');

                if (box.innerHTML === 'O')
                box.classList.add('board-box-o');
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
        updateSymboles       
    }
})()

export default htmlController;