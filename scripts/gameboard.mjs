const gameboard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];

    function createGameboard() {
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            // console.log(board[i])
            for (let j = 0; j < columns; j++) {
                 board[i][j] = "";
            }           
        }        
    } 
    
    function clearGameboard() {
        board = [];
    }

    
    return {createGameboard,
            clearGameboard,
            board}
})();

gameboard.createGameboard()
console.log(gameboard.board)