const longestBinGap = require('../Questions/LongestBinaryGap');

test('longest binary gap', ()=> {
    expect(longestBinGap(1)).toBe(0); // 1 //=> 0
    expect(longestBinGap(5)).toBe(1); // 101 //=> 1
    expect(longestBinGap(19)).toBe(2); // 10011 //=> 2
    expect(longestBinGap(1041)).toBe(5); // 10000010001 //=> 5
    expect(longestBinGap(6291457)).toBe(20); // 11000000000000000000001 //=> 20
    expect(longestBinGap(1376796946)).toBe(5); // 1010010000100000100000100010010 //=> 5
    expect(longestBinGap(1610612737)).toBe(28); // 1100000000000000000000000000001 //=> 28
    expect(longestBinGap(1041)).toBe(5);
    const start = performance.now();
    longestBinGap(1041);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
    console.log("Ran in :", end - start, "ms")
});