const mpg = require('mpg123');

const backgroundMusic = () => {
  const player = new mpg.MpgPlayer();
  player.play(__dirname + '/' + 'cicazene.mp3');
};

const chosenElementSound = () => {
  const player2 = new mpg.MpgPlayer();
  player2.play(__dirname + '/' + 'chosen.mp3');
};

const girlYoureDead = () => {
  const player3 = new mpg.MpgPlayer();
  player3.play(__dirname + '/' + 'ded.mp3');
};

const mouseSound = () => {
  const player4 = new mpg.MpgPlayer();
  player4.play(__dirname + '/' + 'mouse.mp3');
};

const nadfedelesKulipintyo = () => {
  const player5 = new mpg.MpgPlayer();
  player5.play(__dirname + '/' + 'bangomargit.mp3');
};
module.exports = {
  backgroundMusic,
  chosenElementSound,
  girlYoureDead,
  mouseSound,
  nadfedelesKulipintyo,
};
