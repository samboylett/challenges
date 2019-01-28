const Matrix = require('./index.js');

const matrix = Object.freeze([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
]);

describe('Matrix', () => {
    it('throws error if matrix values not in ascending order', () => {
        expect(() => {
            new Matrix([[1, 0]]);
        }).toThrow();
    });

    it('throws error if matrix values not in ascending order across every axis', () => {
        expect(() => {
            new Matrix([[4, 5, 6], [1, 2, 3]]);
        }).toThrow();
    });

    describe('getTotalLength', () => {
        it('returns the number of values in matrix', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getTotalLength()).toBe(6);
            expect(new Matrix([[1, 2, 3, 4]]).getTotalLength()).toBe(4);
        });
    });

    describe('getIndexCoords', () => {
        it('returns the coords of a flattened array index at the beginning', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getIndexCoords(0)).toEqual([0, 0]);
        });

        it('returns the coords of a flattened array index at the end', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getIndexCoords(5)).toEqual([1, 2]);
        });

        it('returns the coords of a flattened array index in the middle', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getIndexCoords(2)).toEqual([0, 2]);
            expect(new Matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]).getIndexCoords(5)).toEqual([1, 1]);
        });
    });

    describe('getCoordsIndex', () => {
        it('returns the index of a flattened array index at the beginning', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getCoordsIndex([0, 0])).toEqual(0);
        });

        it('returns the index of a flattened array index at the end', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getCoordsIndex([1, 2])).toEqual(5);
        });

        it('returns the index of a flattened array index in the middle', () => {
            expect(new Matrix([[1, 2, 3], [4, 5, 6]]).getCoordsIndex([0, 2])).toEqual(2);
            expect(new Matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]).getCoordsIndex([1, 1])).toEqual(5);
        });
    });

    describe('getValueIndexSimple', () => {
        it('returns the correct coords for the values location', () => {
            const m = new Matrix(matrix);

            expect(m.getValueIndexSimple(1)).toEqual([0, 0]);
            expect(m.getValueIndexSimple(20)).toEqual([4, 3]);
            expect(m.getValueIndexSimple(10)).toEqual([2, 1]);
        });

        it('returns null if value not present', () => {
            const m = new Matrix(matrix);

            expect(m.getValueIndexSimple(30)).toBe(null);
        });
    });

    describe('getValueIndex', () => {
        it('returns the correct coords for the values location', () => {
            const m = new Matrix(matrix);

            expect(m.getValueIndex(1)).toEqual([0, 0]);
            expect(m.getValueIndex(20)).toEqual([4, 3]);
            expect(m.getValueIndex(10)).toEqual([2, 1]);
        });

        it('returns null if value not present', () => {
            const m = new Matrix(matrix);

            expect(m.getValueIndex(30)).toBe(null);
            expect(m.getValueIndex(10.5)).toBe(null);
            expect(m.getValueIndex(0)).toBe(null);
        });
    });

    describe('getDimensions', () => {
        it('returns equal to the number of dimensions', () => {
            expect(new Matrix([1]).getDimensions()).toBe(1);
            expect(new Matrix([[1]]).getDimensions()).toBe(2);
            expect(new Matrix([[[1]]]).getDimensions()).toBe(3);
        });
    });
});
