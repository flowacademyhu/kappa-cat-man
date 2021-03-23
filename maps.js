const randomDirection = ["LEFT", "UP", "DOWN", "RIGHT"];

const fs = require("fs");
//NOTE: HAPPY TO RENAME ANYTHING , MAPS AND MAPS.JS A BIT CONFUSING
//Made the code a function , now we can call it in maps.js
const generateMap = () => {
  //defined 2empty array for the read
  let segedT = [];
  let segedT2 = [];
  let randomMap = Math.floor(Math.random() * 3);
  //read and split with \n and "" by character
  if (randomMap === 0) {
    file = fs.readFileSync("./maps", { encoding: "utf8" });
  } else if (randomMap === 1) {
    file = fs.readFileSync("./maps2", { encoding: "utf8" });
  } else if (randomMap === 2) {
    file = fs.readFileSync("./maps3", { encoding: "utf8" });
  }
  segedT = file.split("\n");
  //console.log(segedT);
  for (let i = 0; i < segedT.length; i++) {
    segedT2[i] = segedT[i].split("");
  }
  //JUst a log out to check if all GUcci my dude
  //console.log(segedT2);
  const objectMap = segedT2;
  for (let i = 0; i < segedT.length; i++) {
    for (let j = 0; j < segedT2[i].length; j++) {
      //make sure to have a lot of space cause this console log is HUGE MAN
      //if its empty , We fill the array position with an object of null keys
      if (segedT[i][j] === " ") {
        objectMap[i][j] = {
          type: null,
          icon: " ",
          direction: null,
          color: null,
        };
      }
      //same for the wall we fill 3 values , but it cannot move * Hopefully #prayers
      if (segedT[i][j] === "w") {
        objectMap[i][j] = {
          type: "wall",
          icon: "#",
          direction: null,
          color: "BROWN", // pc bro pc
        };
      }

      if (segedT[i][j] === "X") {
        objectMap[i][j] = {
          type: "player",
          icon: "X",
          direction: randomDirection[Math.floor(Math.random() * 4)], //I just defined A random direction , can be also down
          color: "PINK", // pc bro pc
        };
      }

      if (segedT[i][j] === "E") {
        objectMap[i][j] = {
          type: "enemy",
          icon: "E",
          direction: randomDirection[Math.floor(Math.random() * 4)], //I just defined A random direction , can be anything for enemy
          //maybe we can define a search function if he sees wall do not hit wall
          //HITTING WALL BAD
          color: "RED", // pc bro pc
        };
      }

      if (segedT[i][j] === "T") {
        objectMap[i][j] = {
          type: "target",
          icon: "T",
          direction: randomDirection[Math.floor(Math.random() * 4)], //I just defined A random direction , can be anything for enemy
          //maybe we can define a search function if he sees wall do not hit wall
          //HITTING WALL BAD
          color: "GREY", // pc bro pc
        };
      }
    }
  }

  return objectMap;
};

module.exports = generateMap
