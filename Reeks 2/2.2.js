const readlineSync = require("readline-sync");

let min = readlineSync.question('Give me your minimum number, Please?');
let max = readlineSync.question('Give me your maximum number, Please?');
let current = readlineSync.question('Give me a number between min and max, Please?');

if ((min < current) && (current < max)) {
  console.log("This is the current number");
} else {
  console.log( "You are wrong dummy" );
}
