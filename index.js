const maps2 = require("./maps.js");
const highS = require("./highscore.js");
const sounds = require("./sounds");
const makeT = require("./makeTable.js");
const readlinesync = require("readline-sync");
const term = require("terminal-kit").terminal;
const fs = require("fs");
const mpg = require("mpg123");
const { table, TableCol } = require("table");

const map = maps2.generateMap();
let cfonts = require("cfonts");
let tombXD = [];

const printMap = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].icon === "X") {
        term.red("🐈");
      } else if (map[i][j].icon === "#") {
        term.red("🧱");
      } else if (map[i][j].icon === "T") {
        term.red("🐁");
      } else if (map[i][j].icon === "E") {
        term.red("👮");
      } else if (map[i][j].icon === "D") {
        term.red("👻");
      } else {
        term.red(map[i][j].icon + " ");
      }
    }
    term("\n");
  }
};

console.log();

const stdin = process.stdin;

const addAssincronListener = () => {
  let myVar = setInterval(step2, 300);
  tombXD[0] = myVar;

  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding("utf8");
  stdin.on("data", (key) => {
    console.log("You pressed: ", key);
    if (key === "q") {
      process.exit();
    }
    if (key === "a") {
      for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          if (map[i][j].type === "player") {
            map[i][j].direction = "LEFT";
          }
        }
      }
    }
    if (key === "s") {
      for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          if (map[i][j].type === "player") {
            map[i][j].direction = "DOWN";
          }
        }
      }
    }
    if (key === "d") {
      for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          if (map[i][j].type === "player") {
            map[i][j].direction = "RIGHT";
          }
        }
      }
    }
    if (key === "w") {
      for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          if (map[i][j].type === "player") {
            map[i][j].direction = "UP";
          }
        }
      }
    }
  });
};

const changeDirection = (i, j) => {
  const randomDirection = ["LEFT", "UP", "DOWN", "RIGHT"];
  console.log(randomDirection[Math.floor(Math.random() * 4)]);

  if (map[i][j].type === "target" || map[i][j].type === "enemy") {
    map[i][j].direction = randomDirection[Math.floor(Math.random() * 4)];
    if (map[i][j + 1].icon === "#") {
      map[i][j].direction = randomDirection[Math.floor(Math.random() * 4)];
    } else if (map[i + 1][j].icon === "#") {
      map[i][j].direction = randomDirection[Math.floor(Math.random() * 4)];
    } else if (map[i][j].icon === "#") {
      map[i][j].direction = randomDirection[Math.floor(Math.random() * 4)];
    } else if (map[i][j - 1].icon !== "#") {
      map[i][j].direction = randomDirection[Math.floor(Math.random() * 4)];
    }
  }
};

pvpEvent = (i, j) => {
  let caughtMouse = false;
  if (map[i][j + 1].icon == "X" && map[i][j].icon === "E") {
    map[i][j + 1].icon = "D";
    map[i][j + 1].type = null;
    map[i][j + 1].direction = null;
    map[i][j + 1].color = null;
    eletero--;
  }
  if (map[i][j].icon == "X" && map[i][j + 1].icon === "E") {
    map[i][j].icon = "D";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    eletero--;
  }
  if (map[i + 1][j].icon == "X" && map[i][j].icon === "E") {
    map[i + 1][j].icon = "D";
    map[i + 1][j].type = null;
    map[i + 1][j].direction = null;
    map[i + 1][j].color = null;
    eletero--;
  }
  if (map[i][j].icon == "X" && map[i + 1][j].icon === "E") {
    map[i][j].icon = "D";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    eletero--;
  }
  if (map[i][j + 1].icon == "T" && map[i][j].icon === "X") {
    map[i][j + 1].icon = " ";
    map[i][j + 1].type = null;
    map[i][j + 1].direction = null;
    map[i][j + 1].color = null;
    caughtMouse = true;
  }
  if (map[i][j].icon == "T" && map[i][j + 1].icon === "X") {
    map[i][j].icon = " ";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    caughtMouse = true;
  }
  if (map[i + 1][j].icon == "T" && map[i][j].icon === "X") {
    map[i + 1][j].icon = " ";
    map[i + 1][j].type = null;
    map[i + 1][j].direction = null;
    map[i + 1][j].color = null;
    caughtMouse = true;
  }
  if (map[i][j].icon == "T" && map[i + 1][j].icon === "X") {
    map[i][j].icon = " ";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    caughtMouse = true;
  }
  if (caughtMouse) {
    score++;
    sounds.mouseSound();
  }
};

let eletero = 1;
let score = 0;

const step2 = () => {
  let stringTomb = [];
  let string;
  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map[i].length - 1; j++) {
      string = i + "" + j;
      if (stringTomb.includes(string) === false) {
        pvpEvent(i, j);
        if (
          map[i][j].type === "target" ||
          map[i][j].type === "enemy" ||
          map[i][j].type === "player"
        ) {
          if (map[i][j].direction === "RIGHT") {
            if (map[i][j + 1].icon !== "#") {
              const temp = map[i][j + 1];
              map[i][j + 1] = map[i][j];
              map[i][j] = temp;
              string = i + "" + (j + 1);
              stringTomb.push(string);
            } else {
              changeDirection(i, j);
            }
          }
          if (map[i][j].direction === "DOWN") {
            if (map[i + 1][j].icon !== "#") {
              const temp = map[i + 1][j];
              map[i + 1][j] = map[i][j];
              map[i][j] = temp;
              string = i + 1 + "" + j;
              stringTomb.push(string);
            } else {
              changeDirection(i, j);
            }
          }
          if (map[i][j].direction === "LEFT") {
            if (map[i][j - 1].icon !== "#") {
              const temp = map[i][j - 1];
              map[i][j - 1] = map[i][j];
              map[i][j] = temp;
              string = i + "" + (j - 1);
              stringTomb.push(string);
            } else {
              changeDirection(i, j);
            }
          }
          if (map[i][j].direction === "UP") {
            if (map[i - 1][j].icon !== "#") {
              const temp = map[i - 1][j];
              map[i - 1][j] = map[i][j];
              map[i][j] = temp;
              string = i - 1 + "" + (j + 1);
              stringTomb.push(string);
            } else {
              changeDirection(i, j);
            }
          }
        }
      }
    }
  }
  console.clear();
  checkTarget();
  if (eletero === 0) {
    console.log("🤕 You lose, noob! 🤕");
    sounds.girlYoureDead();
    clearInterval(tombXD[0]);
    console.clear();

    fs.appendFile(
      "highscore.txt",
      "," + this.name + "," + score,
      function (err) {
        if (err) throw err;
        let highTomb = highS.generateHighScore();

        highS.minimumSelectionSort(highTomb);
        makeT.makeTable(highTomb, 1);
        console.log("Press 'q' to Goodbye");
      }
    );
  }

  printMap();

  console.log("Your score my Cat-Man: ", score);
};

const checkTarget = () => {
  let counter = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].icon === "T") {
        counter++;
      }
    }
  }
  if (counter === 0) {
    clearInterval(tombXD[0]);
    console.clear();
    fs.appendFile(
      "highscore.txt",
      "," + this.name + "," + score,
      function (err) {
        if (err) throw err;
        let highTomb = highS.generateHighScore();

        highS.minimumSelectionSort(highTomb);
        makeT.makeTable(highTomb);
      }
    );
  }
};

const start = (name) => {
  this.name = name;

  addAssincronListener();
};

module.exports = {
  start,
  score,
};
