import { selectRandom, shuffle } from '../word';

test('selects one random item from array', () => {
  const arr = ['a', 'b', 'c'];
  const result = selectRandom(arr);
  expect(arr.includes(result)).toBeTruthy();
});

test('string to be shuffled correctly', () => {
  const string = 'ebukahills';
  const shuffled = shuffle(string);
  expect(string).not.toMatch(shuffled);
  expect(string).toHaveLength(shuffled.length);
  expect(string.split('').every(s => shuffled.match(s))).toBeTruthy();
});
