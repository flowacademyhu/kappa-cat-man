const fs = require('fs');

const HIGHSCORE_FILE = './highscore.txt'

const compareScores = (a, b) => {
  return a.score - b.score
}

const generateHighScore = () => {
  // read file
  const file = fs.readFileSync(HIGHSCORE_FILE, { encoding: 'utf8' });
  const savedHighScores = file.split(',');

  // parse input high scores
  const highScores = []

  for (let i = 1; i < savedHighScores.length; i += 2) {
    const currentScore = {
      name: savedHighScores[i-1],
      score: parseInt(savedHighScores[i]), 
    }

    highScores.push(currentScore);
  }

  // sort high score
  const sortedHighScores = highScores.sort(compareScores).reverse()

  // transform high score array
  const result = []

  for(let i = 0; i < sortedHighScores.length; i++) {
    result.push(sortedHighScores[i].name)
    result.push(sortedHighScores[i].score)
  }

  return result;
};

const addHighScore = (name, score, cb) => {
  fs.appendFile(
    HIGHSCORE_FILE,
    ',' + name + ',' + score,
    cb
  );
}

generateHighScore()

module.exports = {
  addHighScore,
  generateHighScore,
};
