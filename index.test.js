const isPalindrome = require('./index.js');

it('can identify an even palindrome', () => {
  expect(isPalindrome('abccba')).toBeTruthy();
});

it('can identify an odd palindrome', () => {
  expect(isPalindrome('abcdcba')).toBeTruthy();
});
