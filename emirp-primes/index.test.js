const { isPrime, isEmirp, generateEmirps, generatePrimes } = require('./index.js');

describe('isPrime', () => {
    it('returns true if prime', () => {
        expect(isPrime(7)).toBe(true);
        expect(isPrime(1)).toBe(true);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(113)).toBe(true);
    });

    it('returns false if not prime', () => {
        expect(isPrime(10)).toBe(false);
        expect(isPrime(4)).toBe(false);
        expect(isPrime(87)).toBe(false);
    });
});

describe('isEmirp', () => {
    it('returns false if not prime', () => {
        expect(isEmirp(10)).toBe(false);
    });

    it('returns false if prime but not emirp', () => {
        expect(isEmirp(67)).toBe(false);
    });

    it('returns true if emirp', () => {
        expect(isEmirp(31)).toBe(true);
    });
});

describe('generatePrimes', () => {
    fit('works', () => {
        console.log('generatePrimes', generatePrimes(10000));
    });
});

describe('generateEmirps', () => {
    it('can generate first 20 emirps', () => {
        expect(generateEmirps(20)).toEqual([
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            31,
            37,
            71,
            73,
            79,
            97,
            101,
            107,
            113,
            131,
            149,
            151,
            157,
        ]);
    });
});
