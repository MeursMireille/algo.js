const readlineSync = require("readline-sync");

let day = parseInt(readlineSync.question ('Give me a number between 1 and 7, please '));
/* let Tuesday = 2 (readlineSync.question ('Give me a number between 1 and 7, please '));
let Wednesday = 3 (readlineSync.question ('Give me a number between 1 and 7, please '));
let Thursday = 4 (readlineSync.question ('Give me a number between 1 and 7, please '));
let Friday = 5 (readlineSync.question ('Give me a number between 1 and 7, please '));
let Saturday = 6 (readlineSync.question ('Give me a number between 1 and 7, please '));
let Sunday= 7 (readlineSync.question ('Give me a number between 1 and 7, please '));
 */
if (day == 1) { 
    console.log ("Monday")
}
    

    else if (day == 2) { 
        console.log ("Tuesday")
    }
       /* else 
        console.log ("Between 1 and 7 please !" )
       */
        else if (day == 3) { 
            console.log ("Wednesday") 
        }
          /*   else 
            console.log ("Between 1 and 7 please !" ) */
        
            else if (day == 4) { 
                console.log ("Thursday")
            }
                /* else 
                console.log ("Between 1 and 7 please !" ) */
            
                else if (day == 5) { 
                console.log ("Friday")
                }
                   /*  else 
                    console.log ("Between 1 and 7 please !" ) */
                
                   else if (day == 6) { 
                    console.log ("Saturday")
                    }
                        /* else 
                        console.log ("Between 1 and 7 please !" ) */
                    
                        else if  (day == 7) { 
                        console.log ("Sunday")
                        }
                            else 
                            console.log ("Between 1 and 7 please !" )                       
