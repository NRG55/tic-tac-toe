import gameboard from "./gameboard.mjs";
import gameController from "./gamecontroller.mjs";

const htmlController = (() => {
    const buttonStart = document.querySelector('#button-start');    
    const gameBoard = document.querySelector(".gameboard");    

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

    buttonStart.addEventListener('click', () => {
        gameController.startGame();
    })
    return {       
        render       
    }
})()

export default htmlController;