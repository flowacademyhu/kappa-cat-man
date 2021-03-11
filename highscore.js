const fs = require('fs');
const generateHighScore = () => {
  let segedTomb = [];
  const file = fs.readFileSync('./highscore.txt', { encoding: 'utf8' });
  segedTomb = file.split(',');

  for (let i = 1; i < segedTomb.length; i += 2) {
    segedTomb[i] = parseInt(segedTomb[i]);
  }
  return segedTomb;
};

const minimumSelectionSort = (src) => {
  for (let i = 1; i < src.length - 2; i += 2) {
    let minIndex = i;
    for (let j = i + 2; j < src.length; j += 2) {
      if (src[j] > src[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = src[minIndex];
      src[minIndex] = src[i];
      src[i] = temp;
      temp = src[minIndex - 1];
      src[minIndex - 1] = src[i - 1];
      src[i - 1] = temp;
    }
  }
  return src;
};
module.exports = {
  generateHighScore,
  minimumSelectionSort,
};
