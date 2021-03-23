const { table, TableCol } = require("table");

let cfonts = require("cfonts");

//table config definition
let output;
let config;
config = {
  columnDefault: {
    width: 90,
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
const printHighScores = (highScores, x) => {
  console.clear();

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
    maxLength: "20",
    gradient: "magenta,yellow",
    independentGradient: true,
    transitionGradient: true,
    env: "node",
  });


  let graficTable = generate2d(highScores.length / 2, 2);
  let j = 0;
  for (let i = 0; i < highScores.length; i += 1) {
    const {name} = highScores[i]
    const {score} = highScores[i]

    if (i === 0) {
      graficTable[j][0] = "👑 " + name;
      graficTable[j][1] = " 🔥 " + score + " 🔥 ";
    } else if (i === 2) {
      graficTable[j][0] = "🥈 " + name;
      graficTable[j][1] = score + " mancs points";
    } else if (i === 4) {
      graficTable[j][0] = "😒 " + name;
      graficTable[j][1] = score + " mancs points";
    } else if (i === highScores.length - 2) {
      graficTable[j][0] = "🙈 " + name;
      graficTable[j][1] = " 👎 " + score + " 👎 ";
    } else {
      graficTable[j][0] = "😿 " + name;
      graficTable[j][1] = score + " mancs points";
    }

    j++;
  }


  output = table(graficTable, config);

  console.log(output);
};

module.exports = {
  printHighScores,
};
