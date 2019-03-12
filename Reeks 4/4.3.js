
const readlineSync = require("readline-sync");
 
let i=0;
let aantal=0;
let n = readlineSync.question('Can you give me your a number please?');

function rand10() {
    i = Math.floor((Math.random() * 10) + 1);
    console.log(i);
    }


function multirand(n) {
  if (aantal <n){
    rand10() 
    aantal=aantal+1
    multirand(n)
  }
}

multirand(n);


//extra oefening
/* 
let p=0;
let e=6;

function kiss(k,i,s,) {
  p = Math.floor((Math.random() * 10) + 1);
  p=p+k+i+s
  console.log(p);
}

kiss(3,6,9);
kiss(2,4,6,8);

function erwin(e) {
  for (let e = 0; e < p; e++) {
    e > p
  }
}
erwin(e); */