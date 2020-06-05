const permCheck = require('../Questions/PermCheck');

test('test permCheck', () => {
    expect(permCheck([1,2,3,5,5,5])).toBe(0);
    expect(permCheck([1,2,3,4])).toBe(1);
    expect(permCheck([1])).toBe(1);
    expect(permCheck([2,2,2])).toBe(0);
    const start = performance.now();
    permCheck([1,2,3,5,5,5])   
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});