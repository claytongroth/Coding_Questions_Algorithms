const tapeEquillibrium = require('../Questions/TapeEquillibrium');

test('test tapeEquillibrium', () => {
    expect(tapeEquillibrium([5, 6, 2, 4, 1])).toBe(4);
    const start = performance.now();
    tapeEquillibrium([5, 6, 2, 4, 1]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});