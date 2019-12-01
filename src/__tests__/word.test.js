import { selectRandom, shuffle } from '../word';

it('selects one random item from array', () => {
  const arr = ['a', 'b', 'c'];
  const result = selectRandom(arr);
  expect(arr.includes(result)).toBeTruthy();
});

it('string to be shuffled correctly', () => {
  const string = 'ebukahills';
  const shuffled = shuffle(string);
  expect(string).not.toMatch(shuffled);
  expect(string.length).toBe(shuffled.length);
  expect(string.split('').every(s => shuffled.match(s))).toBeTruthy();
});
