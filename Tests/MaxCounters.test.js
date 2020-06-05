const maxCounters = require('../Questions/MaxCounters');

test('test maxCounters', () => {
    expect(maxCounters(5,[3,4,4,6,1,4,4])).toStrictEqual([3, 2, 2, 4, 2]);
    const start = performance.now();
    maxCounters(5,[3,4,4,6,1,4,4])    
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});