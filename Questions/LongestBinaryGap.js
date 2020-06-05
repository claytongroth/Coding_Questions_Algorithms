// Question:
//////////////////////////////////////////////////
// given an integer, return the longest binary gap of the number's binary representation


//PSUEDOCODE:
//////////////////////////////////////////////////
// convert to binary
// convert to Array of numbers
// find the indices of all of the 1s
// find the biggest difference between indices, which is just iterating through to find the biggest difference between elements
////  iterate through array of numbers 
//// declare a min
//// if the current element is less than the min, update the min.
//// decalre a maximum seen difference
//// if the current elements difference from the min is greater than the maximum seen difference, update the MSD
/// also check if the current element is greater than the min.. for this..

//EDGECASES:
//////////////////////////////////////////////////
// has no binary gaps, return 0
// that means if it has no 1 or no 1 or only one 1

function longestBinGap(N){
    let str = N.toString( 2 ); 
    let zeroCount = 0;
    let result = 0;
    for ( let digit of str ) {
        if ( digit === '0' ) {
            zeroCount ++;
        } else  if ( digit === '1' ) {
            //the result will be either the LAST result or the new zero count 
            //and will only get reset/overwritten by the bigger of the two
            result = Math.max( result, zeroCount );
            zeroCount = 0;
        }
    }
    return result;
}

module.exports = longestBinGap;