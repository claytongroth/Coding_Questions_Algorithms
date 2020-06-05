const frogRiverOne = require('../Questions/FrogRiverOne');

test('test tapeEquillibrium', () => {
    expect(frogRiverOne(5,[1,2,3,4,2,1,2,5])).toBe(7);
    const start = performance.now();
    frogRiverOne(5,[1,2,3,4,2,1,2,5])    
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});