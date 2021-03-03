//just inporting maps.js
const maps2 = require('./maps.js');
const step = require('./gameplay.js');
const readlinesync = require('readline-sync');

//Time to use the functions fam
const map = maps2.generateMap();

const printMap = () => {
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      process.stdout.write(map[i][j].icon + ' ');
    }
    console.log();
  }
};
printMap();
let button = readlinesync.keyIn();
while (button !== 'q') {
  button = readlinesync.keyIn();
  if (button === 'd') {
    step.stepRight(map);
    printMap();
  }
  if (button === 'a') {
    step.stepLeft(map);
    printMap();
  }
  if (button === 'w') {
    step.stepUp(map);
    printMap();
  }
  if (button === 's') {
    step.stepDown(map);
    printMap();
  }
}
