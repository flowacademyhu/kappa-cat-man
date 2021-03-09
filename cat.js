let getPixels = require("get-pixels");
let term = require("terminal-kit").terminal;

const cica = () => {
  term.drawImage("./cica.png", {
    shrink: { width: 100, height: 100 },
  });
};

console.log(cica());
