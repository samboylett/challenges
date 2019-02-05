function isPrime(number) {
    for (let i = 2; i <= (number / 2); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function primes(from, to) {

}

module.exports = { isPrime, primes };
