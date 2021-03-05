const fs = require("fs");
//NOTE: HAPPY TO RENAME ANYTHING , MAPS AND MAPS.JS A BIT CONFUSING
//Made the code a function , now we can call it in maps.js
const generateHighScore = () => {
  //defined 2empty array for the read
  let segedTomb = [];
  //read and split with \n and "" by character
  const file = fs.readFileSync("./highscore", { encoding: "utf8" });
  segedTomb = file.split(",");
  console.log("A LEGMAGASABB PONTOK", typeof segedTomb[2]);
  return segedTomb;
  //console.log(segedT);
};
let highScore = [];
highScore = generateHighScore();
//console.log(generateHighScore());
console.log("A LEGMAGASABB PONTOK", typeof highScore);
console.log(highScore);
//segedTomb.push("7");
let xx = 32;

for (let i = 1; i < highScore.length; i++) {
  highScore[i] = parseInt(highScore[i]);
  i += 1;
}
/*fs.appendFile("highscore", "," + xx, (err) => {
  // In case of a error throw err.
  if (err) throw err;
});*/
console.log(highScore);
module.exports = {
  generateHighScore,
};
