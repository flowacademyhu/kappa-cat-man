let readLine = require("readline-sync");
let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;
const startGame = require("./index");
const highS = require("./highscore");

let name = "";
const game = (name) => {
  startGame.start(name);
};

cfonts.say("CATMAN", {
  font: "block",
  align: "center",
  colors: ["system"],
  background: "transparent",
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: "0",
  gradient: "magenta,yellow",
  independentGradient: true,
  transitionGradient: true,
  env: "node",
});

const klari = () => {
  term.drawImage("./klarikam.jpg", {
    shrink: { width: 180, height: 1500 },
  });
};

const margit = () => {
  term.drawImage("./margitom.jpg", {
    shrink: { width: 180, height: 150 },
  });
};

const items = [
  "                😻 New Game",
  "                😸 Highscores",
  "                🙀 Credits",
  "                😿 Exit",
];
term.singleColumnMenu(items, function (error, response) {
  term("\n").eraseLineAfter.red("You chose: %s\n", response.selectedText);
  if (response.selectedIndex === 0) {
    console.clear();
    cfonts.say("CATMAN", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "magenta,yellow",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    term.grabInput(false);
    name = readLine.question("What is your name? ");
    console.log("Welcome, ", name, "!");

    setTimeout(klari, 30);
    setTimeout(madeBy, 40);
    setTimeout(game, 60, name);
  } else if (response.selectedIndex === 1) {
    let highTomb = highS.generateHighScore();

    highS.minimumSelectionSort(highTomb);
    startGame.makeTable(highTomb);
    /*for (let i = 0; i < highTomb.length; i += 2) {
      process.stdout.write(highTomb[i] + ":" + highTomb[i + 1]);

      console.log();
    }*/

    term.grabInput(false);
  } else if (response.selectedIndex === 2) {
    console.clear();
    cfonts.say("KREDITSZ", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "magenta,yellow",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    term.grabInput(false);

    console.log("Copyright (c) 2021 Team Cica");
    console.log(
      "Team Cica members: Mate Pinter, Jonka Szabo, Marton Marta, Barnabas Judak, Imre Varga"
    );
    console.log("Thanks for playing the game!");
    console.log("2021, Hungary, Szeged, Flow Academy");
    //setTimeout(margit, 1500);
  } else if (response.selectedIndex === 3) {
    console.clear();
    cfonts.say("IJKSZIT", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "magenta,yellow",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    term.grabInput(false);
    process.exit();
  }
});

const madeBy = () => {
  console.log("made by Balázs Klári és Korda Gyuri <3");
};

module.exports = {
  game,
  name,
};
