const getCoords = require('./index.js');

const matrix = Object.freeze([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
]);

it('passes the examples', () => {
    expect(getCoords(matrix, 10)).toEqual([2, 1]);
    expect(getCoords(matrix, 1)).toEqual([0, 0]);
    expect(getCoords(matrix, 20)).toEqual([4, 3]);
});

it('returns null if no answer', () => {
    expect(getCoords(matrix, 300)).toBe(null);
});
