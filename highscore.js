const fs = require('fs');

const HIGHSCORE_FILE = './highscore.txt'

const generateHighScore = () => {
  let segedTomb = [];
  const file = fs.readFileSync(HIGHSCORE_FILE, { encoding: 'utf8' });
  segedTomb = file.split(',');

  for (let i = 1; i < segedTomb.length; i += 2) {
    segedTomb[i] = parseInt(segedTomb[i]);
  }
  return minimumSelectionSort(segedTomb);
};

const addHighScore = (name, score, cb) => {
  fs.appendFile(
    HIGHSCORE_FILE,
    ',' + name + ',' + score,
    cb
  );
}

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
  addHighScore,
  generateHighScore,
};
