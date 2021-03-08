//just inporting maps.js
const maps2 = require("./maps.js");
const step = require("./gameplay.js");
const readlinesync = require("readline-sync");
const menuwin = require("./menuwin.js");
var ctx = require("axel");
//Time to use the functions fam
const map = maps2.generateMap();
let tombXD = [];

const printMap = () => {
  // ctx.point(1, 2, 10);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      process.stdout.write(map[i][j].icon + " ");

      /*  if (map[i][j].type === "player") {
        ctx.bg(0, 255, 0);
      }
      if (map[i][j].type === "enemy") {
        ctx.bg(255, 255, 0);
      }
      if (map[i][j].type === "wall") {
        ctx.bg(255, 255, 240);
      }
      if (map[i][j].type === "target") {
        ctx.bg(0, 0, 240);
      }
      if (map[i][j].type === null) {
        ctx.bg(255, 0, 0);
      }
      ctx.point(j, i);
      ctx.cursor.restore();
    }
    ctx.cursor.restore();
  }
  ctx.cursor.restore();
};*/
    }
    console.log();
  }
};

/*let button = readlinesync.keyIn(); */
const addAssincronListener = () => {
  let myVar = setInterval(step2, 500);
  tombXD[0] = myVar;
  const stdin = process.stdin;
  stdin.setRawMode(true); // Ne várjon enterre
  stdin.resume(); // Csak process.exit-el lehet kilépni
  stdin.setEncoding("utf8"); // Karaktereket kapjunk vissza
  stdin.on("data", (key) => {
    // Callback függvény
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
  // printMap();
};

/*while (button !== "q") {
  button = readlinesync.keyIn();
  
}*/

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
  //pvp kezdete Enem
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
  } //pvp vége
  //pvp kezdete Enem
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
  } //pvp vége targetre
};

let eletero = 1;
let score = 0;

const step2 = () => {
  /* */

  let stringTomb = [];
  let string;
  for (let i = 1; i < map.length - 1; i++) {
    for (let j = 1; j < map[i].length - 1; j++) {
      //wallra és emtyre nem történik semmi

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
    return;
  }
  /* if (checkTarget() === false) {
    console.log("Nyertél");
    clearInterval(myVar);
  }*/
  printMap();
  console.log("Your score Cat-man", score);
};

const checkTarget = (myVar) => {
  let counter = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j].icon === "T") {
        counter++;
      }
    }
  }
  if (counter === 0) {
    console.log("nyertél00");
    clearInterval(tombXD[0]);
    menuwin.menuAfterWin();
    return;
  }
};

const checkHighScore = () => {
  generateHighScore;
};

const start = () => {
  printMap();
  addAssincronListener();
  //let myVar = setInterval(s, 300);
};

module.exports = {
  start,
  score,
};
//var myVar = setInterval(s, 300);

/*function setColor() {
  var x = document.body;
  x.style.backgroundColor =
    x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}

function stopColor() {
  clearInterval(myVar);
}*/
