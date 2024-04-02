import gameboard from "./gameboard.mjs";

const htmlController = (() => {
    const boardBoxes = document.querySelectorAll('.board-box');
    const box = document.querySelector('.board-box');
    boardBoxes.forEach((element) => {
       element.addEventListener('click', (event) => {
        const boxIndex = parseInt(event.target.dataset.index);       
        console.log(boxIndex);

       })
       
       
    })

    return {
        boardBoxes,
       
    }

})()

console.log(gameboard)