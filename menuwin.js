let readLine = require("readline-sync");
let getPixels = require("get-pixels");
let axel = require("axel");
let cfonts = require("cfonts");
let term = require("terminal-kit").terminal;

const game = () => {
  //backtoMenu.start();
};

const klari = () => {
  term.drawImage("./klarikam.jpg", {
    shrink: { width: 180, height: 1500 },
  });
};

const items = [
  "                Vissza a menübe",
  "                Kijárat (egzit)",
];

const menuAfterWin = () => {
  cfonts.say("BIG WIN", {
    font: "block", // define the font face
    align: "center", // define text alignment
    colors: ["system"], // define all colors
    background: "transparent", // define the background color, you can also use `backgroundColor` here as key
    letterSpacing: 1, // define letter spacing
    lineHeight: 1, // define the line height
    space: true, // define if the output text should have empty lines on top and on the bottom
    maxLength: "0", // define how many character can be on one line
    gradient: "magenta,yellow", // define your two gradient colors
    independentGradient: true, // define if you want to recalculate the gradient for each new line
    transitionGradient: true, // define if this is a transition between colors directly
    env: "node", // define the environment CFonts is being executed in
  });

  term.singleColumnMenu(items, function (error, response) {
    term("\n").eraseLineAfter.red(
      "Eztet választottad ki: %s\n",
      response.selectedText
    );
    if (response.selectedIndex === 0) {
      console.clear();
      const backtoMenu = require("./menu.js");
    } else if (response.selectedIndex === 1) {
      term.grabInput(false);
      process.exit();
    }
  });
};

module.exports = { menuAfterWin };
