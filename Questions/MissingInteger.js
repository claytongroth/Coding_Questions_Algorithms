// Question:
//////////////////////////////////////////////////
/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].

//PSUEDOCODE:
//////////////////////////////////////////////////
> declare a min of 1
> sort the array in ascending order
> iterate through, if the current element is > -1 and === the min, add on to the minimum

//EDGECASES:
//////////////////////////////////////////////////
huge arrays


Detected time complexity:
O(n)

*/

function missingInteger(A) {
    let min = 1;

    A.sort(function(a,b){
       return a - b; 
    });

    // if A[i] is never equal to the min, then the answer mut be 1 by virtue of the assumptions
    // otherwise it will be one more than the last min.
    for (let i in A) {
        if (A[i] > -1 && A[i] == min) {
            min++;
        }
    }

    return min;
}

module.exports = missingInteger;