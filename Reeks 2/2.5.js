const readlineSync = require("readline-sync");
let num = 0;

 while (num !== 42) {
     num = parseInt (readlineSync.question ('which is your favorite number?'));

    if (num === 42) {
        console.log ("That's the correct number")
        
    
   //if   
 } else {
  
    // else
        
    readlineSync.question("Are you sure?");
        
    }
}