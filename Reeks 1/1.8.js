const readlineSync = require("readline-sync");

const questions = 4;
let firstName = readlineSync.question(" Can you give me your firstName please ?");
let car = readlineSync.question("Which car do you drive ? ");
let hobby = readlineSync.question(" What kind of hobby do you have ? ");
let animal = readlineSync.question(" Which animal do you like ? ");
console.log ("Dear " + firstName + " can you pick me and my " + animal + " up? Maybe in your " + car + " and drop me off at the " + hobby + " ");