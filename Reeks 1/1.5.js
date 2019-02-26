const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Can you give me an number please ? ");
let number2 = readlineSync.question("Can you give me an number please ? ");
console.log (Math.floor(number1)*number2);