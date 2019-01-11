function isPalindrome(sentence) {
  for (let i = 0; i < sentence.length / 2; i++) {
    if (sentence[i] !== sentence.slice(-i - 1)[0]) return false;
  }

  return true;
}

module.exports = isPalindrome;
