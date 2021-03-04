const randomDirection = ["LEFT", "UP", "DOWN", "RIGHT"];

const fs = require("fs");
//NOTE: HAPPY TO RENAME ANYTHING , MAPS AND MAPS.JS A BIT CONFUSING
//Made the code a function , now we can call it in maps.js
const generateMap = () => {
  //defined 2empty array for the read
  let segedT = [];
  let segedT2 = [];
  //read and split with \n and "" by character
  const file = fs.readFileSync("./maps", { encoding: "utf8" });
  segedT = file.split("\n");
  console.log(segedT);
  for (let i = 0; i < segedT.length; i++) {
    segedT2[i] = segedT[i].split("");
  }
  //JUst a log out to check if all GUcci my dude
  console.log(segedT2);
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
  //console.log(objectMap);

  //console.log(objectMap[5][4].type);
  return objectMap;
};
/*
Maybe I gonna put it in a function later
const objectMap = [];
for (let i = 0; i < segedT.length; i++) {
  for (let j = 0; j < segeT1[i].length; j++) {
    if (segedT[i][j] === " ") {
      objectMap[i][j] = {
        type: null,
        icon: null,
        direction: null,
        color: null,
      };
    }
  }
}
*/
//made the export to start and connect with index.js

module.exports = {
  generateMap,
};
