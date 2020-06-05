const passingCars = require('../Questions/PassingCars');

test('passingCars', ()=> {
    expect(passingCars([0,1,0,1,1])).toBe(5); // 1 //=> 0
    const start = performance.now();
    passingCars([0,1,0,1,1]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});