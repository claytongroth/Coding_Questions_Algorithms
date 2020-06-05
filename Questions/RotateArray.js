// Question:
//////////////////////////////////////////////////
// Given an array A and an integer N rotate the array N times...

//PSUEDOCODE:
//////////////////////////////////////////////////
// declare an increment variable
// if the array has any elemnts, loop through unshifting the last element (popped), to the start
// increment
// return the new array

//EDGECASES:
//////////////////////////////////////////////////
// []



function rotateArray(A,K){
    const arr = A;
    let i = 0;
    if (arr.length){
        while (i < K){
            arr.unshift(arr.pop())
            i++;
        }
    }
    return arr;
}

module.exports = rotateArray;