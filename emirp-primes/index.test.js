const { isPrime } = require('./index.js');

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
