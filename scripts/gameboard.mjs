const gameboard = (function() {
    const board = new Array(9);

    const setBoardBox = (index, symbol) => {
        board[index] = symbol;
    };

    const clearGameboard = () => {
        for (let i = 0; i < 9; i++ ) {
            board[i] = "";
        }        
    }

    clearGameboard();
    console.log(board)
    
    

    
    return {setBoardBox,
            clearGameboard,
            board}
})();

export default gameboard

// gameboard.createGameboard()
// console.log(gameboard.board)