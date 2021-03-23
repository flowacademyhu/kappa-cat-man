const fs = require('fs');

const HIGHSCORE_FILE = './highscore.txt'
const HIGHSCORE_FILE_JSON = './highscore.json'

const compareScores = (a, b) => {
  return a.score - b.score
}

const readHighScoreFile = () => {
  const file = fs.readFileSync(HIGHSCORE_FILE, { encoding: 'utf8' });
  return file.split(',');
}

const readHighScoreFileJson = () => {
  const file = fs.readFileSync(HIGHSCORE_FILE_JSON, { encoding: 'utf8' });
  return JSON.parse(file)
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
  return readHighScoreFileJson();
};

const addHighScore = (name, score) => {
  const savedHighScores = readHighScoreFileJson()

  savedHighScores.push({
    name: name,
    score: score,
  })

  const sortedHighScores = sortHighScores(savedHighScores)

  fs.writeFileSync(HIGHSCORE_FILE_JSON, JSON.stringify(sortedHighScores))
}

module.exports = {
  addHighScore,
  generateHighScore,
};
