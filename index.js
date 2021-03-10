const maps2 = require("./maps.js");
const highS = require("./highscore.js");
const readlinesync = require("readline-sync");
const term = require("terminal-kit").terminal;
const fs = require("fs");
const { table, TableCol } = require("table");
const { red } = require("chalk");
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
  let myVar = setInterval(step2, 500);
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
    score++;
  }
  if (map[i][j].icon == "T" && map[i][j + 1].icon === "X") {
    map[i][j].icon = " ";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    score++;
  }
  if (map[i + 1][j].icon == "T" && map[i][j].icon === "X") {
    map[i + 1][j].icon = " ";
    map[i + 1][j].type = null;
    map[i + 1][j].direction = null;
    map[i + 1][j].color = null;
    score++;
  }
  if (map[i][j].icon == "T" && map[i + 1][j].icon === "X") {
    map[i][j].icon = " ";
    map[i][j].type = null;
    map[i][j].direction = null;
    map[i][j].color = null;
    score++;
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
    console.log("vesztettél");
    clearInterval(tombXD[0]);
    console.clear();

    fs.appendFile(
      "highscore.txt",
      "," + this.name + "," + score,
      function (err) {
        if (err) throw err;
        let highTomb = highS.generateHighScore();

        highS.minimumSelectionSort(highTomb);
        makeTable(highTomb, 1);
        console.log("Press 'q' to Goodbye");
        /* for (let i = 0; i < highTomb.length; i += 2) {
          if (i === highTomb.length - 2) {
            process.stdout.write(highTomb[i] + ":" + score);
            console.log();
          } else {
            process.stdout.write(highTomb[i] + ":" + highTomb[i + 1]);
            console.log();
          }
        }*/
      }
    );
  }

  printMap();
  console.log("Your score Cat-man", score);
};
//table config definition
let output;
let config;
config = {
  columnDefault: {
    width: 50,
  },

  columns: {
    0: {
      alignment: "center",
    },
    1: {
      alignment: "center",
    },
  },
};
//generate 2d array for table
const generate2d = (n, m) => {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

//make and print table
const makeTable = (highS, x) => {
  console.clear();
  if (x === 1) {
    cfonts.say("ITTEN MAR LABDABA NEM RUGOL CSAK RUGTAL", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 0,
      lineHeight: 1,
      space: true,
      maxLength: "22",
      gradient: "magenta,yellow",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
  }
  if (x === 2) {
    cfonts.say("WIN VAN TESA", {
      font: "block",
      align: "center",
      colors: ["system"],
      background: "transparent",
      letterSpacing: 0,
      lineHeight: 1,
      space: true,
      maxLength: "22",
      gradient: "magenta,yellow",
      independentGradient: true,
      transitionGradient: true,
      env: "node",
    });
  }
  cfonts.say("HIGHSCORES", {
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
  let graficTable = generate2d(highS.length / 2, 2);
  let j = 0;
  for (let i = 0; i < highS.length; i += 2) {
    if (i === 0) {
      graficTable[j][0] = "👑 " + highS[i];
      graficTable[j][1] = " 🔥 " + highS[i + 1] + " 🔥 ";
    } else if (i === 2) {
      graficTable[j][0] = "🥈 " + highS[i];
      graficTable[j][1] = highS[i + 1];
    } else if (i === 4) {
      graficTable[j][0] = "😒 " + highS[i];
      graficTable[j][1] = highS[i + 1];
    } else if (i === highS.length - 2) {
      graficTable[j][0] = "🙈 " + highS[i];
      graficTable[j][1] = " 👎 " + highS[i + 1] + " 👎 ";
    } else {
      graficTable[j][0] = "😿 " + highS[i];
      graficTable[j][1] = highS[i + 1];
    }

    j++;
  }
  output = table(graficTable, config);

  console.log(output);
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
        /*  for (let i = 0; i < highTomb.length; i += 2) {
          if (i === highTomb.length - 2) {
            process.stdout.write(highTomb[i] + ":" + score);
            console.log();
          } else {
            process.stdout.write(highTomb[i] + ":" + highTomb[i + 1]);
            console.log();
          }
        }*/
      }
    );
    makeTable(highTomb);
    console.log("Press 'q' to Goodbye");
    let button2 = readlinesync.keyIn("Congratz you won! Press Q-t exit.");
    if (button2 === "q") {
      process.exit();
    }
  }
};

const start = (name) => {
  this.name = name;

  addAssincronListener();
};

module.exports = {
  start,
  score,
  makeTable,
};
