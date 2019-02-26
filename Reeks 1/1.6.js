const readlineSync = require("readline-sync");

let integer1 = readlineSync.question("Can you give me an integer number please ? ");
let integer2 = readlineSync.question("Can you give me an integer number please ? ");
console.log (Math.round(integer1)/Math.round(integer2));

