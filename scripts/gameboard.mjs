import htmlController from "./htmlcontroller.mjs";


const gameboard = (function() {   
    const board = ["", "", "", "", "", "", "", "", ""]
    
    function update(index, currentPlayerSymbol) { 
        board[index] = currentPlayerSymbol;
        console.log(board)
        htmlController.render();         
       
        const boardBoxes = document.querySelectorAll('.board-box');
        boardBoxes.forEach((box) => {
                if (box.innerHTML === 'X')
                box.classList.add('board-box-x');

                if (box.innerHTML === 'O')
                box.classList.add('board-box-o');
                })        
    };

    const getGameboard = () => board;    
   
    return {
        board,
        update,
        getGameboard
       }
})();

export default gameboard;

