const readlineSync = require("readline-sync");
let num = 0;

 while (num !== 42) {
     num = parseInt (readlineSync.question ('which is you favorite number?'));

    if (num === 42) {
        console.log (" YES! That's the correct number")
        
    
   //if   
 } else {
  
    // else
        
    readlineSync.question("Are you sure? Try again!");
        
    }
}