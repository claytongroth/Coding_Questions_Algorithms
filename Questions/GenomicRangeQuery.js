// Question:
//////////////////////////////////////////////////
/*
/**
 * A DNA sequence can be represented as a string consisting of the letters A, C, G and T,
 * which correspond to the types of successive nucleotides in the sequence. Each nucleotide
 * has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact
 * factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form:
 * What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?
 *
 * The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters.
 * There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers.
 * The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained
 * in the DNA sequence between positions P[K] and Q[K] (inclusive).
 *
 * Approach:
 * for each range find occurence of A,C,G,T char in range and return corresponding value

//PSUEDOCODE:
//////////////////////////////////////////////////
declare an object to map
declare a short string for checking values LOWEST impactFactor to highest.

Iterate through Queries...
On each query, ask if the current slice contains the FIRST ---> LAST index of the sub string AGCT
Break on the lowest available...

//EDGECASES:
//////////////////////////////////////////////////
// huge arrays


Detected time complexity:
    O(1)
*/

function genomicRangeQuery(S,P,Q){
    const genMap = {
        A: 1,
        C: 2,
        G: 3,
        T: 4,
    }
    const sStr = 'ACGT'
    const res = []
    for (let i = 0; i < P.length; i++) {
        const start = P[i]
        const end = Q[i] + 1
        const slice = S.slice(start, end)
        let min
        for (let i = 0; i < 4; i++) {
            const char = sStr[i]
            if (slice.indexOf(char) > -1) {
            min = genMap[char]
            break
            }
        }
        res.push(min)
    }
    return res
}

module.exports = genomicRangeQuery;


/*
My initial solution..... 25% 

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let results = [];
    const nucleotides = S.split('').map(getNumber);
    // brute force is, build array of queries and iterate through, then sort rresults....
    for (let i in P){
        if (P[i] === Q[i]){
            results.push(nucleotides[P[i]])
        } else {
            results.push(
                //Math.min(nucleotides[P[i]], nucleotides[Q[i]])
                Math.min(...nucleotides.slice(P[i], Q[i]))
            ) 
        }
    }
    
    function getNumber(n){
        switch (n) {
            case 'A':
                return 1
                break;
            case 'C':
                return 2
                break;
            case 'G':
                return 3
                break;
            case 'T':
                return 4
                break;
            default:
                break;
        }
    }
    
    return results
}

*/