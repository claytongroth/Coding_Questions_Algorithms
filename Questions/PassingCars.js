// Question:
//////////////////////////////////////////////////
/*
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

function solution(A);

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.

//PSUEDOCODE:
//////////////////////////////////////////////////
comments... below

//EDGECASES:
//////////////////////////////////////////////////
// < 100,000


Detected time complexity:
    O(1)
*/

function passingCars(A){
    const aLen = A.length;

    let result = 0;
    let seenNumZeroes = 0;

    for (var i = 0; i < aLen; i++)
    {
        // if it is a zero, we increment the number of seen zeroes
        if (A[i] == 0){
            seenNumZeroes += 1;
        }
        // if it is a one we multiplty the result-to-be by the number of seen zeroes.
        // this gives us the number of pairs by looking backwards one-to-many
        if (A[i] == 1){
            result += seenNumZeroes * 1;

            if (result > 1000000000)
            {
                result = -1;
                break;
            }
        }
    }

    return result;
}

module.exports = passingCars;