const findOddOccurence = require('../Questions/FindOddOccurence');

test('test find odd occurence', () => {
    expect(findOddOccurence([1,2,3,1,3,2,6])).toBe(6);
    const start = performance.now();
    findOddOccurence([1,2,3,1,3,2,6]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});