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
};

//made the export to start and connect with index.js
module.exports = {
  generateMap,
};
