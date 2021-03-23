const fs = require('fs');

const HIGHSCORE_FILE = './highscore.txt'

const compareScores = (a, b) => {
  return a.score - b.score
}

const readHighScoreFile = () => {
  const file = fs.readFileSync(HIGHSCORE_FILE, { encoding: 'utf8' });
  return file.split(',');
}

const parseInputHighScore = (savedHighScores) => {
  const highScores = []

  for (let i = 1; i < savedHighScores.length; i += 2) {
    const currentScore = {
      name: savedHighScores[i-1],
      score: parseInt(savedHighScores[i]), 
    }

    highScores.push(currentScore);
  }

  return highScores
}

const sortHighScores = (highScore) => {
  return highScore.sort(compareScores).reverse()
}

const generateHighScore = () => {
  const savedHighScores = readHighScoreFile()

  const highScores = parseInputHighScore(savedHighScores)

  const sortedHighScores = sortHighScores(highScores)

  return sortedHighScores;
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
