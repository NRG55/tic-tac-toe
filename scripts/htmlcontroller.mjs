import gameboard from "./gameboard.mjs";
import gameController from "./gamecontroller.mjs";

const htmlController = (() => {
    const buttonStart = document.querySelector('#button-start');    
    const gameBoard = document.querySelector(".gameboard"); 
    const messageDisplay  = document.querySelector(".game-message");    

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
        messageDisplay.innerHTML = message;
    }

    buttonStart.addEventListener('click', () => {
        gameController.startGame();
    })
    return {       
        render,
        displayMessage       
    }
})()

export default htmlController;