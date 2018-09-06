function theBeatlesPlay (players, instruments) {
  var allPlayers= []; 
    for (let i = 0; i < players.length; i++) {
      allPlayers.push(players[i] + " plays " + instruments[i]) }
      return allPlayers
    }

function johnLennonFacts(array) {
  var newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`); i++
  }
  return newArray
}
