const missingElem = require('../Questions/PermMissingElem');

test('test missingElem', () => {
    expect(missingElem([1,2,3,4,5,7])).toBe(6);
    const start = performance.now();
    missingElem([1,2,3,4,5,7]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});