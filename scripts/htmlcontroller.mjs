import gameboard from "./gameboard.mjs";
import gameController from "./gamecontroller.mjs";

const htmlController = (() => {
    const buttonStart = document.querySelector('#button-start');
    const buttonRestart = document.querySelector('#button-restart');
    const buttonExit = document.querySelector('#button-exit');
    const gameBoardContainer = document.querySelector(".gameboard-container");     
    const gameBoard = document.querySelector(".gameboard"); 
    const playersForm = document.querySelector(".players-form");
    const playersInfo = document.querySelector(".players-info-main");
    const playerOneInfo = document.querySelector(".player1-info"); 
    const playerTwoInfo = document.querySelector(".player2-info");
    const playerOneName = document.querySelector(".player1-name"); 
    const playerTwoName = document.querySelector(".player2-name");   
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
        gameMessage.classList.add('round-result')
        gameMessage.appendChild(buttonRestart)
        buttonRestart.classList.add('#button-restart')
    }

    function selectPlayer(player) {        
        if(player === 'O') {
            htmlController.playerOneInfo.classList.add('player1-glow')
            htmlController.playerTwoInfo.classList.remove('player2-glow')
        }        
        if(player === 'X') {
            htmlController.playerTwoInfo.classList.add('player2-glow')
            htmlController.playerOneInfo.classList.remove('player1-glow')
        } 
    }

    buttonStart.addEventListener('click', () => {
        gameController.startGame();
    })
    
    buttonRestart.addEventListener('click', () => {
        gameController.restartGame();
    })

    buttonExit.addEventListener('click', () => {
        gameController.exitGame();
    })
    return {       
        render,
        displayMessage,       
        updateSymboles,
        selectPlayer,       
        gameMessage,
        playersForm,
        playersInfo,
        playerOneName,
        playerTwoName,
        playerOneInfo,
        playerTwoInfo,
        gameBoardContainer,       
    }
})()

export default htmlController;