const isPalindrome = require('./index.js');

it('can identify an even palindrome', () => {
  expect(isPalindrome('abccba')).toBeTruthy();
});

it('can identify an odd palindrome', () => {
  expect(isPalindrome('abcdcba')).toBeTruthy();
});

it('can identify an even palindrome with a space', () => {
  expect(isPalindrome('abcc ba')).toBeTruthy();
});

it('can identify an odd palindrome with a space', () => {
  expect(isPalindrome('a bcdcba')).toBeTruthy();
});

it('can identify an even palindrome with a comma', () => {
  expect(isPalindrome('abcc,ba')).toBeTruthy();
});

it('can identify an odd palindrome with a comma', () => {
  expect(isPalindrome('a,bcdcba')).toBeTruthy();
});

it('passes the examples', () => {
  expect(isPalindrome('A car, a man, a maraca')).toBeTruthy();
  expect(isPalindrome('Adam is the best')).toBeFalsy();
  expect(isPalindrome('A but tuba')).toBeTruthy();
  expect(isPalindrome('I can say but tuba with a straight face')).toBeFalsy();
});
