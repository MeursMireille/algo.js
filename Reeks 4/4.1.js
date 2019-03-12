const readlineSync = require("readline-sync");

let questionLength = readlineSync.question('Can you give me the lenght of the rectangle?');
console.log(questionLength)
let questionWidth = readlineSync.question('Can you give me the width of the rectangle?')
console.log(questionWidth)

let surface;
function calcSurface(questionLength,questionWidth) {
    surface = questionLength * questionWidth;
   console.log  (surface);
}

calcSurface (questionLength, questionWidth); {
    console.log("The surface of the rectangle is "  + surface);
} 


/* Extra oefening

let t = 1;
let e = 2;
let s = 3;
let total;

function test(t,e,s) {
    total = t + e + s ;
 console.log (total);
}

test(t,e,s);
console.log("The total of this is " + total); */