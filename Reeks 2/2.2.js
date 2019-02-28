const readlineSync = require("readline-sync");

let min = readlineSync.question('Give me your minimum number, Please?');
let max = readlineSync.question('Give me your maximum number, Please?');
let current = readlineSync.question('Give me a number between min. and max., Please?');

if ((min > max) || (current > max)); {
   console.log("Error!! You are wrong dummy!");
} 
else  ((min < max) || (current > min)); 
{ 
  console.log("current number");
} 

if ((current > max) && (current < min)); { 
  console.log(error);
  alert("Hmm, that is not correct. Your min is more than your max!");
}
