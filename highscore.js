const fs = require("fs");
const start = require("./index.js");

//NOTE: HAPPY TO RENAME ANYTHING , MAPS AND MAPS.JS A BIT CONFUSING
//Made the code a function , now we can call it in maps.js
const generateHighScore = () => {
  //defined 2empty array for the read
  let segedTomb = [];
  //read and split with \n and "" by character
  const file = fs.readFileSync("./highscore.txt", { encoding: "utf8" });
  segedTomb = file.split(",");
  //making all the numbers integer for comparing
  for (let i = 1; i < segedTomb.length; i += 2) {
    segedTomb[i] = parseInt(segedTomb[i]);
  }
  return segedTomb;
};
//sorting array descending , maxSearch
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
//exporting to menu.js
module.exports = {
  generateHighScore,
  minimumSelectionSort,
};
