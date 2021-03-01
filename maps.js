const fs = require("fs");
let segedT = [];
let segedT2 = [];
const file = fs.readFileSync("./maps", { encoding: "utf8" });
segedT = file.split("\n");
console.log(segedT);
for (let i = 0; i < segedT.length; i++) {
  segedT2[i] = segedT[i].split("");
}
console.log(segedT2);
