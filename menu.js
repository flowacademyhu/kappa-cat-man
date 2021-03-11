let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;
const startGame = require("./index");
const highS = require("./highscore");
const sounds = require("./sounds");
const makeT = require("./makeTable");
const { stdin } = require("process");

sounds.backgroundMusic();

function terminate() {
  term.grabInput(false);
  setTimeout(function () {
    process.exit();
  }, 100);
}

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
  const stdin = process.stdin;
  if (response.selectedIndex === 0) {
    sounds.chosenElementSound();
    term.grabInput(false);
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
    term.grabInput(false);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", (key) => {
      if (key === "q") {
        terminate();
      }
    });
    sounds.chosenElementSound();
    let highTomb = highS.generateHighScore();

    highS.minimumSelectionSort(highTomb);
    makeT.makeTable(highTomb);
  } else if (response.selectedIndex === 2) {
    sounds.chosenElementSound();
    term.grabInput(false);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf8");
    stdin.on("data", (key) => {
      if (key === "q") {
        terminate();
      }
    });
    console.clear();
    cfonts.say("KREDITSZ", {
      font: "chrome",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 0,
      space: true,
      maxLength: "0",
      gradient: "magenta,green",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });

    console.log("Copyright (c) 2021 Team Cica");

    cfonts.say("Jonka Szabo,Imre Varga,\nMarton Marta,Barnabas Judak", {
      font: "pallet",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 0,
      space: true,
      maxLength: "0",
      gradient: "yellow,magenta",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    console.log(" 🔥 Mentorunk alias fő cica aka Criminal Mastermind 🔥: ");
    cfonts.say("Mate Pinter", {
      font: "simple3d",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 0,
      space: true,
      maxLength: "0",
      gradient: "red,#ffa500",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    console.log(
      "Mentor haverjai aka Those whom without this wouldn't be possible ❤️ "
    );

    cfonts.say("Dezsi Martin,Hajnal Andor,Maroy Andras", {
      font: "chrome",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 1,
      lineHeight: 0,
      space: true,
      maxLength: "0",
      gradient: "cyan,#ffa500",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
    console.log("❤️ Special thanks ❤️ ");
    cfonts.say(
      "A jofej Martin, a rosszfej Martin,  a googlizd ki Martin, Az old meg Andor , a masik Andris , Feri,  A hetedik Feri, A takarito neni, Gyoszo, Agi a.k.a. Vampir, Csipkes Zoltan , Csipkezetlen Zoltan,   a nem Fabian FERI, Lelyla hercegno, Bango Margit, Balazs Feco , A NetPincer futar , Dogos Robert ,\nA szegedi Tudomany Egyetem  , A boldog szulinapot Vasi , a csikorgo villamosok es kavefozok,az SZKT",
      {
        font: "console",
        align: "center",
        colors: ["system"],
        background: "white",
        letterSpacing: 1,
        lineHeight: 0,
        space: true,
        maxLength: "200",
        gradient: "magenta,red",
        independentGradient: true,
        transitionGradient: true,
        env: "node",
      }
    );

    console.log(
      "Copyright (c) 2021 Team Cica                                Thanks for playing the game                                     2021, Hungary, Szeged, Flow Academy"
    );

    setTimeout(margit, 15000);
    setTimeout(sounds.nadfedelesKulipintyo, 3000);
    if (startGame.key === "q") {
      process.exit();
    }
  } else if (response.selectedIndex === 3) {
    sounds.chosenElementSound();
    console.clear();
    cfonts.say("EGZIT", {
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
