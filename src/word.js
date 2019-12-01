export function selectRandom(arr = []) {
  const i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

export function shuffle(string) {
  let array = string.split('');
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.join('');
}

const words = ['fossil', 'select', 'parlay', 'hazel', 'video', 'measly', 'funnel', 'member', 'guzzle', 'purple'];

let slectedWord = selectRandom(words).toUpperCase();

const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');

let displayBuilder = slectedWord;

while (displayBuilder.length < 9) {
  displayBuilder += selectRandom(characters);
}

export const display = shuffle(displayBuilder)
  .toUpperCase()
  .split('');

export const word = slectedWord.split('');
