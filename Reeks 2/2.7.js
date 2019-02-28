const readlineSync = require("readline-sync");

let result = 0;
let n = parseInt(readlineSync.question ('Give me a number between 1 and 9, please '));

for (let i = 0; i < n; i++ ) {
    result = result + parseInt(readlineSync.question ('Give me a number between 1 and 9, please '));
}
    
console.log (result)