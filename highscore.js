const fs = require("fs");
const start = require("./index.js");
const nev = require("./menu.js");
//NOTE: HAPPY TO RENAME ANYTHING , MAPS AND MAPS.JS A BIT CONFUSING
//Made the code a function , now we can call it in maps.js
const generateHighScore = () => {
  //defined 2empty array for the read
  let segedTomb = [];
  //read and split with \n and "" by character
  const file = fs.readFileSync("./highscore", { encoding: "utf8" });
  segedTomb = file.split(",");
  console.log("A LEGMAGASABB PONTOK", typeof segedTomb[0]);
  return segedTomb;
  //console.log(segedT);
};
const minimumSelectionSort = (src) => {
  for (let i = 1; i < src.length - 2; i++) {
    let minIndex = i;
    for (let j = i + 2; j < src.length; j++) {
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
      j += 1;
    }
    if (minIndex !== i) {
      let temp = src[minIndex];
      src[minIndex] = src[i];
      src[i] = temp;
      temp = src[minIndex - 1];
      src[minIndex - 1] = src[i - 1];
      src[i - 1] = temp;
    }
    i += 1;
  }
};

let highScore = [];
highScore = generateHighScore();

//console.log(generateHighScore());
//console.log("A LEGMAGASABB PONTOK", typeof highScore);
//console.log(highScore);
//segedTomb.push("7");

for (let i = 1; i < highScore.length; i++) {
  highScore[i] = parseInt(highScore[i]);
  i += 1;
}

if (parseInt(highScore[highScore.length - 1]) !== NaN) {
  highScore[highScore.length] = "Béla";
  highScore[highScore.length] = start.score;
}
minimumSelectionSort(highScore);
/*for (let i = 1; i < highScore.length; i++) {
  fs.writeFile("highscore", "," + highScore[i], (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}*/
//tomb nev1,2,nev2,17,nev3,8,nev4,4,nev5,9,nev6,24,nev7,52,nev8,12,nev9,42

//for (let i = 1; i < highScore.length; i++) {
fs.writeFile("highscore", highScore, function (err) {
  if (err) throw err;
});
//}
console.log(highScore);
module.exports = {
  generateHighScore,
};
