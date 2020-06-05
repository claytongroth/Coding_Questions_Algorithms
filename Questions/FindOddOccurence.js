// Question:
//////////////////////////////////////////////////
// Given an array with duplicate elements, all except one, 
// find the odd, unpaired element,...

//PSUEDOCODE:
//////////////////////////////////////////////////
// 

//EDGECASES:
//////////////////////////////////////////////////
// NA

function findOddOccurence(A){
    let result = 0;
    for (let element of A) {
        // Will go to zero if the element is the same, e.g. not change
        // will stay at the element that is NOT the same.
        result ^= element
    }

    return result
}

module.exports = findOddOccurence;