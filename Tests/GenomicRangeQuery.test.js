const genomicRangeQuery = require('../Questions/GenomicRangeQuery');

test('genomicRangeQuery', ()=> {
    expect(genomicRangeQuery("CAGCCTA", [2,5,0], [4,5,6])).toStrictEqual([2, 4, 1]); // 1 //=> 0
    const start = performance.now();
    genomicRangeQuery("CAGCCTA", [2,5,0], [4,5,6]);
    const end = performance.now();
    expect(end - start).toBeLessThan(50);
});