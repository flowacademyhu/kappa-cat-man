//just inporting maps.js
const maps2 = require('./maps.js');
const step = require('./gameplay.js');

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
step.stepDown(map);
step.stepLeft(map);
step.stepRight(map);
step.stepUp(map);
printMap();
