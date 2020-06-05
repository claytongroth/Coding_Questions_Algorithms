const missingInteger = require('../Questions/MissingInteger');

test('test missingInteger', () => {
    expect(missingInteger([1,2,4,2,1,2,5])).toBe(3);
    const start = performance.now();
    missingInteger([1,2,4,2,1,2,5])    
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});