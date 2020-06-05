// Question:
//////////////////////////////////////////////////
/*
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].


//PSUEDOCODE:
//////////////////////////////////////////////////
// 

//EDGECASES:
//////////////////////////////////////////////////
// huge arrays


Detected time complexity:
O(n)

*/

function maxCounters(N, A) {
    // initialize all counters to 0
    let counters = Array(N).fill(0)
    // The maximum value of the counter is 0
    let max = 0

    // This variable will determine if an increment all operation has been encountered
    // and its value determines the maximum increment-all operation encountered so far
    // for start it is 0, and we will set it to the value of max when A[i] == N + 1
    let maxAll = 0

    for(let i = 0; i < A.length; i++) {
        //console.log(i, {maxAll})
        if (A[i] <= counters.length) {
            // if the value of A[i] is 1, we have to increment c[0]
            // and hence the following index
            const currentIndex = A[i] - 1

            // if max all operation was found previously,
            // we have to set it here, because we are not setting anything in the else section
            // we are just setting a flag in the else section
            // if its value however is greater than maxAll, it probably was already maxed
            // and later incremented, therefore we will skip it
            if (counters[currentIndex] < maxAll) counters[currentIndex] = maxAll
            
            // do the increment here
            const v = ++counters[currentIndex]

            // update the max if the current value is max
            max = v > max ? v : max
        }
        // this is straight forward
        else maxAll = max
    }
    
    // if there are remaining items that have not been set to maxAll inside the loop
    // we will update them here.
    // and we are updating them here instead of inside the for loop in the else section
    // to make the running time better. If updated inside the loop, we will have a running time of M * N
    // however here it's something like (M + N) ~ O(N)
    
    //console.log("counters before final change", counters, {maxAll})
    if (maxAll) counters = counters.map(v => v < maxAll ? maxAll : v)
    //console.log("counters after final change", counters)

    // return the counters
    return counters
}

module.exports = maxCounters;


/*
// My initial solution, O(N*M) ok...
function maxCounters(A, N) {
    let counters = Array(N).fill(0);
    let max = 0;
    
    for (let i =0;i<A.length;i++){
        const value = A[i];
        if (value === N + 1){
            counters = Array(N).fill(max)
        } else {
            // increase index - 1 of counters by 1
            const countersI = ++counters[A[i]-1];
            if (countersI > max) max = countersI
            // console.log(counters)
        }
      
    }
    return counters
}
*/