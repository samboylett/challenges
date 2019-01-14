/*
  String funcs I wanted to use:
    String.prototype.replace
    String.prototype.toLowerCase
*/
function isPalindrome(sentence) {
  const word = Array.from(sentence)
    .filter(char => ![' ', ','].includes(char))
    .map(char => {
      const code = char.charCodeAt(0);

      return String.fromCharCode(code >= 97 ? code - 32 : code);
    })
    .join('');

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word.slice(-i - 1)[0]) return false;
  }

  return true;
}

function isPalindrome2(sentence) {
  const word = sentence.replace(/[\s,\,]*/g, '').toLowerCase();

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word.slice(-i - 1)[0]) return false;
  }

  return true;
}

module.exports = isPalindrome;
