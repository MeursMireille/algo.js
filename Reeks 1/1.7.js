const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("Can you give me your shoe size please ? ");
let birthYear = readlineSync.question("Can you give me your birth year please ? ");
console.log ((shoeSize * 2 + 5 ) * 50 - birthYear + 1766);
