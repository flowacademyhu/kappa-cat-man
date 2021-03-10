let readLine = require("readline-sync");
let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;
const startGame = require("./index");
const highS = require("./highscore");
const makeT = require("./makeTable");
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
      gradient: "magenta,red",
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
    makeT.makeTable(highTomb);

    term.grabInput(false);
  } else if (response.selectedIndex === 2) {
    console.clear();
    cfonts.say("KREDITSZ", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 10,
      space: true,
      maxLength: "0",
      gradient: "magenta,green",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    term.grabInput(false);

    console.log("Copyright (c) 2021 Team Cica");

    cfonts.say("Jonka Szabo,Imre Varga,Marta Marton,\nBarnabas Judak", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "yellow,magenta",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    /*cfonts.say("Imre Varga", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "red,green",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    cfonts.say("Barnabas Judak", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "yellow,cyan",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    cfonts.say("Marton Marta", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "0",
      gradient: "blue,red",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });*/
    console.log("Menter alias fő cica");
    cfonts.say("Mate Pinter", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 1,
      space: true,
      maxLength: "25",
      gradient: "red,green",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    console.log("Special thank / Those whom without this wouldn't be possible");
    console.log(
      "Martin, Andor , Andris , a jófej Martin, a goolizd ki Martin, Az old meg Andor , a mésik Andris , A hetedik Feri, A takarító néni, Győző, Ági a.k.a. Vámpír, Csipkés Zoltán , Csipkézetlen Zoltán , Feri , Leijla hercegnő, Bangó Margit, Balázs Fecó , A NetPincér futár , A szegedi Tudomány Egyetem  "
    );
    console.log("Copyright (c) 2021 Team Cica");
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
      gradient: "magenta,red",
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
