const reverseString = require('../reverseString');

test('reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
  expect(reverseString('foo bar')).toBe('rab oof');
  expect(reverseString('')).toBe('');
});
