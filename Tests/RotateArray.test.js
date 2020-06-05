const rotateArray = require('../Questions/RotateArray');

test('test rotate array', () => {
    expect(rotateArray([1,2,3], 1)).toStrictEqual([3,1,2]);
    const start = performance.now();
    rotateArray([1,2,3], 1);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});