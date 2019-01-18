const Matrix = require('./index.js');

const matrix = Object.freeze([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
]);

describe('Matrix', () => {
    describe('getTotalLength', () => {
        it('returns the number of values in matrix', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getTotalLength()).toBe(6);
            expect(new Matrix([[1, 2, 3, 4]]).getTotalLength()).toBe(4);
        });
    });

    describe('getIndexCoords', () => {
        it('returns the coords of a flattened array index at the beginning', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getIndexCoords(0)).toEqual([0, 0]);
        });

        it('returns the coords of a flattened array index at the end', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getIndexCoords(5)).toEqual([1, 2]);
        });

        it('returns the coords of a flattened array index in the middle', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getIndexCoords(2)).toEqual([0, 2]);
            expect(new Matrix([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]).getIndexCoords(5)).toEqual([1, 1]);
        });
    });

    describe('getCoordsIndex', () => {
        it('returns the index of a flattened array index at the beginning', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getCoordsIndex([0, 0])).toEqual(0);
        });

        it('returns the index of a flattened array index at the end', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getCoordsIndex([1, 2])).toEqual(5);
        });

        it('returns the index of a flattened array index in the middle', () => {
            expect(new Matrix([[1, 2, 3], [1, 2, 3]]).getCoordsIndex([0, 2])).toEqual(2);
            expect(new Matrix([[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]).getCoordsIndex([1, 1])).toEqual(5);
        });
    });
});
