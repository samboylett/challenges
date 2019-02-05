function isPrime(number) {
    for (let i = 2; i <= (number / 2); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function isEmirp(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));

    return isPrime(number) && isPrime(reversed);
}

function generatePrimes(max = 20) {
    const primes = [];

    for (let i = 2; primes.length < max; i++) {
        if (!primes.some(num => i % num === 0)) {
            primes.push(i);
        }
    }

    return primes;
}

function generateEmirps(max = 20) {
    const primes = [];
    const emirps = [];

    for (let i = 2; emirps.length < max; i++) {
        if (!primes.some(num => i % num === 0)) {
            primes.push(i);

            if (isEmirp(i)) {
                emirps.push(i);
            }
        }
    }

    return emirps;
}

module.exports = { isPrime, isEmirp, generateEmirps, generatePrimes };
