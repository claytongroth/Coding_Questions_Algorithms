// Question:
//////////////////////////////////////////////////
/*
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].

//PSUEDOCODE:
//////////////////////////////////////////////////
// 

//EDGECASES:
//////////////////////////////////////////////////
// huge arrays


Detected time complexity:
    O(N) or O(N * log(N))
*/

function permCheck(A){
    let min = Math.min(...A);
    let max = Math.max(...A);
    let setSize = [...new Set(A)].length
    //sum of natural numbers formula
    let sum = (A.length) * (A.length +1)/2

    // if the set is smaller than the size, not perm
    if (setSize < A.length) return 0
    if (A.length > 1){
        //if min === max and length is > 1 its not perm
        if (min === max) return 0  // 2,2,2
        // if differnce between min and max is greater than array length...
        if (max-min >= A.length){
            return 0
        }
        //iterate, subtracting element form sum each time...
        for (let i in A ){
            sum -= A[i]
        }
        //if nothing left it is a perm by definition, otherwise not
        return sum === 0 ? 1 : 0;
    } else {
        // if its only 1 in length it is a perm only if it is ===1
        return (A[0] === 1) ? 1 : 0 // 1
    }
}

module.exports = permCheck;


/**
 * 
 * initial attempt... doesnt cover all cases e.g. [1,4,1]
 * function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = (A.length) * (A.length +1)/2
    
    for (let i in A ){
        sum -= A[i]
    }
    return sum === 0 ? 1 : 0;
}
 * 
 * 
 */