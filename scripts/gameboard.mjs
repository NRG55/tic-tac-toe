import htmlController from "./htmlcontroller.mjs";
import gameController from "./gamecontroller.mjs";

const gameboard = (function() {   
    const board = ["", "", "", "", "", "", "", "", ""]
    
    function update(index, currentPlayerSymbol) {
        board[index] = currentPlayerSymbol;
        console.log(board)
        htmlController.render();
    };

    const getGameboard = () => board;

    const buttonStart = document.querySelector('#button-start');    
    buttonStart.addEventListener('click', () => {
        gameController.startGame();
    });
   
    return {
        board,
        update,
        getGameboard
       }
})();

export default gameboard

