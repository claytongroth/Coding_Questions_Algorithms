const countDiv = require('../Questions/CountDiv');

test('test countDiv', () => {
    expect(countDiv(6,11,2)).toBe(3);
    const start = performance.now();
    countDiv(6,11,2)   
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});


