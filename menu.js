let readLine = require("readline-sync");
let getPixels = require("get-pixels");
let axel = require("axel");
let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;
const startGame = require("./index.js");
const highS = require("./highscore.js");
const menuwin = require("./menuwin.js");
const fs = require("fs");

cfonts.say("CATMAN", {
  font: "block", // define the font face
  align: "center", // define text alignment
  colors: ["system"], // define all colors
  background: "transparent", // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: "0", // define how many character can be on one line
  gradient: "magenta,yellow", // define your two gradient colors
  independentGradient: true, // define if you want to recalculate the gradient for each new line
  transitionGradient: true, // define if this is a transition between colors directly
  env: "node", // define the environment CFonts is being executed in
});
let name = "";
const game = () => {
  startGame.start();
};
//this function writes the name in the file and the two , . the score comes from index.js
const fajlbaIras = (name) => {
  fs.appendFile("highscore", "," + name + ",", function (err) {
    if (err) throw err;
  });
};

const klari = () => {
  term.drawImage("./klarikam.jpg", {
    shrink: { width: 180, height: 1500 },
  });
};

const margit = () => {
  term.drawImage("./margitom.jpg", {
    shrink: { width: 180, height: 1500 },
  });
};

const items = [
  "                Új játék",
  "                Magas pontok",
  "                Kreditsz :) ",
  "                Kijárat (egzit)",
];
term.singleColumnMenu(items, function (error, response) {
  term("\n").eraseLineAfter.red(
    "Eztet választottad ki: %s\n",
    response.selectedText
  );
  if (response.selectedIndex === 0) {
    term.grabInput(false);
    name = readLine.question("Mi a neved, csövi?");
    console.log("Üdvözlet ", name, "!");

    setTimeout(klari, 300);
    setTimeout(madeBy, 450);
    //here we start the game , function from index.js and setIntervel
    setTimeout(game, 600);
    fajlbaIras(name);
  }
  //generating highScore from file, sorting it descending and print
  else if (response.selectedIndex === 1) {
    let highTomb = highS.generateHighScore();

    highS.minimumSelectionSort(highTomb);
    for (let i = 0; i < highTomb.length; i += 2) {
      process.stdout.write(highTomb[i] + ":" + highTomb[i + 1]);

      console.log();
    }
    // console.log(highTomb);
    term.grabInput(false);
  } else if (response.selectedIndex === 2) {
    term.grabInput(false);
    setTimeout(margit, 1500);
  } else if (response.selectedIndex === 3) {
    term.grabInput(false);
    process.exit();
  }
});

const madeBy = () => {
  console.log("made by Balázs Klári és Korda Gyuri <3");
};

module.exports = {
  name,
};
