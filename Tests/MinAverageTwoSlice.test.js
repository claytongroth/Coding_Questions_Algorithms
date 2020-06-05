const minAvgTwoSlice = require('../Questions/MinAverageTwoSlice');

test('minAvgTwoSlice', ()=> {
    expect(minAvgTwoSlice([1,-4,2,3,5])).toBe(0); // 1 //=> 0
    const start = performance.now();
    minAvgTwoSlice([1,-4,2,3,5]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});