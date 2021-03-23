const fs = require('fs');

const HIGHSCORE_FILE_JSON = './highscore.json'

const compareScores = (a, b) => {
  return a.score - b.score
}

const readHighScoreFileJson = () => {
  const file = fs.readFileSync(HIGHSCORE_FILE_JSON, { encoding: 'utf8' });
  return JSON.parse(file)
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
