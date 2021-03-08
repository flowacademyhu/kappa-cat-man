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
  for (let i = 1; i < segedTomb.length; i += 2) {
    segedTomb[i] = parseInt(segedTomb[i]);
  }
  let mentettTomb = minimumSelectionSort(segedTomb);
  fs.writeFile("highscore", mentettTomb[0], (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });

  for (let i = 1; i < mentettTomb.length; i++) {
    fs.appendFile("highscore", "," + mentettTomb[i], (err) => {
      // In case of a error throw err.
      if (err) throw err;
    });
  }
  //console.log("A LEGMAGASABB PONTOK", typeof segedTomb[0]);
  return mentettTomb;
  //console.log(segedT);
};

//let mentettTomb = minimumSelectionSort();
const minimumSelectionSort = (src) => {
  for (let i = 1; i < src.length; i = i + 2) {
    parseInt(src[i]);
  }
  for (let i = 1; i < src.length - 2; i += 2) {
    let minIndex = i;
    for (let j = i + 2; j < src.length; j += 2) {
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = src[minIndex];
      src[minIndex] = src[i];
      src[i] = temp;
      let temp2 = src[minIndex - 1];
      src[minIndex - 1] = src[i - 1];
      src[i - 1] = temp2;
    }
  }

  /*let seged1 = [];
  let seged2 = [];
  for (let i = 0; i < src.length; i++) {
    if (i % 2 !== 0) {
      seged1.push(parseInt(src[i]));

      seged2.push(src[i - 1]);
    }
  }
  for (let i = seged1.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (seged1[j] > seged1[j + 1]) {
        const temp = seged1[j];
        seged1[j] = seged1[j + 1];
        seged1[j + 1] = temp;
        const temp2 = seged2[j];
        seged2[j] = seged2[j + 1];
        seged2[j + 1] = temp2;
      }
    }
  }
  let mentettTomb = [];
  for (let i = 0; i < seged1.length; i++) {
    mentettTomb.push(seged2[i]);
    mentettTomb.push(seged1[i]);
  }*/
  /*for (let i = 1; i < src.length; i = i + 2) {
    src[i] = parseInt(src[i]);
  }
  for (let i = 1; i < src.length - 2; i += 2) {
    let minIndex = i;
    for (let j = i + 2; j < src.length; j += 2) {
      if (src[j] < src[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = src[minIndex];
      src[minIndex] = src[i];
      src[i] = temp;
      let temp2 = src[minIndex - 1];
      src[minIndex - 1] = src[i - 1];
      src[i - 1] = temp2;
    }
  }*/

  //  console.log(seged1);
  //console.log(seged2);
  return src;
};

//let highScore = [];
//highScore = generateHighScore();

//console.log(generateHighScore());
//console.log("A LEGMAGASABB PONTOK", typeof highScore);
//console.log(highScore);
//segedTomb.push("7");

/*for (let i = 1; i < highScore.length; i++) {
  highScore[i] = parseInt(highScore[i]);
  i += 1;
}*/

/*if (parseInt(highScore[highScore.length - 1]) !== NaN) {
  highScore[highScore.length] = "Béla";
  highScore[highScore.length] = start.score;
}*/
//minimumSelectionSort(highScore);
/*for (let i = 1; i < highScore.length; i++) {
  fs.writeFile("highscore", "," + highScore[i], (err) => {
    // In case of a error throw err.
    if (err) throw err;
  });
}*/
//tomb nev1,2,nev2,17,nev3,8,nev4,4,nev5,9,nev6,24,nev7,52,nev8,12,nev9,42

//for (let i = 1; i < highScore.length; i++) {

//highscore write function
//let pont = start.score;
/*const highWrite = (highScore, highNev, pont) =>
  fs.writeFile(
    "highscore",
    highScore + "," + highNev + "," + pont,
    function (err) {
      if (err) throw err;
    }
  );*/
//}
//console.log(highScore);
module.exports = {
  generateHighScore,
  minimumSelectionSort,
};
