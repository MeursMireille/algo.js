const readlineSync = require("readline-sync");

let day = parseInt(readlineSync.question ('Give me a number between 1 and 7, please '));

if (day == 1) { 
    console.log ("Monday");
 }
    else if (day == 2) { 
        console.log ("Tuesday");
    }
       
        else if (day == 3) { 
            console.log ("Wednesday"); 
        }
        
            else if (day == 4) { 
                console.log ("Thursday");
            }
            
                else if (day == 5) { 
                console.log ("Friday");
                }
                  
                   else if (day == 6) { 
                    console.log ("Saturday");
                    }
                    
                    else if  (day == 7) { 
                        console.log ("Sunday");
                        }
                            else {
                            console.log ("Between 1 and 7 please !" ); 
                            }     
