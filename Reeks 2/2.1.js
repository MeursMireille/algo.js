const readlineSync = require("readline-sync");
let age = readlineSync.question('How old are you today?');

if (age > 18) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
} 





