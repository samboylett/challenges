const { isPrime, isEmirp, generateEmirps, generatePrimes, getEmirpsBetween } = require('./index.js');

describe('isPrime', () => {
    it('returns true if prime', () => {
        expect(isPrime(7)).toBe(true);
        expect(isPrime(1)).toBe(true);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(113)).toBe(true);
        expect(isPrime(101)).toBe(true);
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

    it('returns false if palindromic prime', () => {
        expect(isEmirp(101)).toBe(false);
    });

    it('returns false if prime but not emirp', () => {
        expect(isEmirp(67)).toBe(false);
    });

    it('returns true if emirp', () => {
        expect(isEmirp(31)).toBe(true);
    });
});

describe('generatePrimes', () => {
    it('generates primes', () => {
        expect(generatePrimes(20)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71 ]);
    });
});

describe('generateEmirps', () => {
    it('can generate first 20 emirps', () => {
        expect(generateEmirps(20)).toEqual([
            13,
            17,
            31,
            37,
            71,
            73,
            79,
            97,
            107,
            113,
            149,
            157,
            167,
            179,
            199,
            311,
            337,
            347,
            359,
            389,
        ]);
    });
});

describe('getEmirpsBetween', () => {
    it('can get emirps between 7700 and 8000', () => {
        expect(getEmirpsBetween(7700, 8000)).toEqual([7717, 7757, 7817, 7841, 7867, 7879, 7901, 7927, 7949, 7951, 7963]);;
    });
});
