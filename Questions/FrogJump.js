// Question:
//////////////////////////////////////////////////
// Given a distance of jump D, a starting position X and an ending position Y...
// Determine the minimum number of integer jumps taken to cross it.

//PSUEDOCODE:
//////////////////////////////////////////////////
// find the total travel distance, get the ceiling, (rounded up division of the jump distance into total travel distance)

//EDGECASES:
//////////////////////////////////////////////////
// one big jump, tons of small jumps


//Detected time complexity:
//O(1)


function frogJump(X,Y,D){
   return Math.ceil( (Y-X)/D)
}

module.exports = frogJump;