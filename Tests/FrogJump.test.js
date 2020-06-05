const frogJump = require('../Questions/FrogJump');

test('test frogJump', () => {
    expect(frogJump(10,85,30)).toBe(3);
    const start = performance.now();
    frogJump(10,85,30);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});