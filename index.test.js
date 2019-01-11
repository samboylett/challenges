const isPalindrome = require('./index.js');

it('can identify a palindrome', () => {
  expect(isPalindrome('abccba')).toBeTruthy();
});
