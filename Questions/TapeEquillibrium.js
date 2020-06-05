// Question:
//////////////////////////////////////////////////
// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:

// function solution(A);

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

//PSUEDOCODE:
//////////////////////////////////////////////////
// 

//EDGECASES:
//////////////////////////////////////////////////
// empty array, single element array

function tapeEquillibrium(A) {  
    //head sum starts as first value  
    let prevSum = A[0];
    //tail sum starts as rest of array's summed value
    let nextSum = A.slice(1, A.length).reduce((a, b) =>  a + b, 0);
    //set initial min, to be overwritten
    let min = Math.abs(nextSum - prevSum);

    for (let i = 1; i < A.length - 1; i++) {
        //add to head sum
        prevSum += A[i];
        //add to tail sum
        nextSum -= A[i];
        //if the new difference between head and tail is less than current min, overwrite it.
        if (Math.abs(prevSum - nextSum) < min) {
            min = Math.abs(prevSum - nextSum);
        }
    }
    return min;
}

module.exports = tapeEquillibrium;



//THIS was my first pass....
// OK but, Detected time complexity: O(N * N)
/*
function rulerSplit(A){
    let i = 1;
    let chunks = []
    while (i < A.length){
      const head = A.slice(0,i).reduce((a, b) => a + b, 0)
      const tail = A.slice(i, A.length).reduce((a, b) => a + b, 0)
      chunks.push(Math.abs(head-tail))
      i++; 
    }
    return chunks.sort((a,b)=>a-b)[0]
    
}
*/