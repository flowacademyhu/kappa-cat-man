let readLine = require("readline-sync");
let getPixels = require("get-pixels");
let axel = require("axel");
let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;
const startGame = require("./index");
const highS = require("./highscore");
const menuwin = require("./menuwin");
const fs = require("fs");
const mpg = require("mpg123");
const sounds = require("./sounds");

sounds.backgroundMusic();

//const player = new mpg.MpgPlayer();
//player.play(__dirname + "/" + "cicazene.mp3");

//const player2 = new mpg.MpgPlayer();

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

console.log(
  "✨ Welcome to CatMan ©! This game is pretty easy. You're this pure, little kitty (🐈), who has to eat all the mouses (🐁) on the map. Just make sure you don't let the sinter (👮) catch you! Have fun! ✨"
);

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
    sounds.chosenElementSound();
    //player2.play(__dirname + "/" + "chosen.mp3");
    term.grabInput(false);

    //name = readLine.question("What is your name? ");

    console.log("What's your name, kitty-cat? ");

    term.inputField({}, (error, name) => {
      const welcome = () => {
        console.log("Welcome, ", name, "!");
      };
      setTimeout(welcome, 300);
      setTimeout(klari, 1000);
      setTimeout(madeBy, 2000);
      console.clear();
      setTimeout(game, 3500, name);
    });
  } else if (response.selectedIndex === 1) {
    sounds.chosenElementSound();
    let highTomb = highS.generateHighScore();

    highS.minimumSelectionSort(highTomb);
    for (let i = 0; i < highTomb.length; i += 2) {
      process.stdout.write(highTomb[i] + ":" + highTomb[i + 1]);

      console.log();
    }

    term.grabInput(false);
  } else if (response.selectedIndex === 2) {
    sounds.chosenElementSound();
    term.grabInput(false);
    console.clear();
    console.log("Copyright (c) 2021 Team Cica");
    console.log(
      "Team Cica members: Mate Pinter, Jonka Szabo, Marton Marta, Barnabas Judak, Imre Varga"
    );
    console.log("Thanks for playing the game!");
    console.log("2021, Hungary, Szeged, Flow Academy");
    setTimeout(margit, 1500);
    setTimeout(sounds.nadfedelesKulipintyo, 1500);
  } else if (response.selectedIndex === 3) {
    sounds.chosenElementSound();
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
