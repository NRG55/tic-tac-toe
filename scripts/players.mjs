const playersList = (function(){
    let players = [];    
    
    function createPlayer(name, symbol) {
      return {
        name,
        symbol
      }       
    }

    return {        
        createPlayer ,
        players      
    }
})();

export default playersList;