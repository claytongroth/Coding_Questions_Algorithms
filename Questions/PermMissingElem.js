// Question:
//////////////////////////////////////////////////
// Given an array of numbers that should hold for [N...(N+!)], for which there is one missing element,
// find the missing element

//PSUEDOCODE:
//////////////////////////////////////////////////
// get the total size of the Array
// get the sum of the entire array
// iterate through and subtract each element
// the remainder, mathematically, MUST equal the missing element.

//EDGECASES:
//////////////////////////////////////////////////
// empty array, single element array



function missingElem(A){
    const size = A.length;
    let sum = (size + 1) * (size + 2) / 2;
    for (i = 0; i < size; i++) {
        sum -= A[i];
    }
    return sum;
}
 
 module.exports = missingElem;
 
 