// Question:
//////////////////////////////////////////////////
/*
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.

//PSUEDOCODE:
//////////////////////////////////////////////////
get all the elements between 0 and top
get all divisible elements between bottom and inf
ask if we add K...

//EDGECASES:
//////////////////////////////////////////////////
// huge arrays


Detected time complexity:
    O(1)
*/

function countDiv(A,B,K){
    // lower end set
    const increments_Of_K_That_Comprise_B = Math.floor(B / K);
    //upper end set
    const increments_Of_K_That_Comprise_A = Math.floor(A / K);
    // Are we including A
    const isAEvenlyDivisibleByK = A % K === 0 ? 1 : 0;

    return increments_Of_K_That_Comprise_B - increments_Of_K_That_Comprise_A + isAEvenlyDivisibleByK
}

module.exports = countDiv;



/* 

initial attempt ... fails in LAAGRe cases...

function countDiv(A,B,K){
    let dNums = [];
    const range = [...Array(B-A+1).keys()].map(i => i + A)

    for (let i=0;i<range.length;i++){
        if (range[i] % K === 0){
            dNums.push(K)
        }
    }
    
    return dNums.length;
}
   */