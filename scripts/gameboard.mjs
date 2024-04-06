import htmlController from "./htmlcontroller.mjs";


const gameboard = (function() {   
    const board = ["", "", "", "", "", "", "", "", ""]
    
    function update(index, currentPlayerSymbol) { 
        board[index] = currentPlayerSymbol;        
        htmlController.render();        
        htmlController.updateSymboles();
    };

    const getGameboard = () => board;    
   
    return {
        board,
        update,
        getGameboard
       }
})();

export default gameboard;

