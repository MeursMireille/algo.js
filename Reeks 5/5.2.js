const readlineSync = require("readline-sync");


let name, productionYear, castMembers;
let tvSerie = { 
    name:"",
    productionYear:"",
    castMembers:[] };



function askTvSerie(){
do {
    name =  readlineSync.question('What is your favorite TV serie ? ');
} while (typeof name === "undefined" || name === "");
 
do {
    productionYear = readlineSync.question('What is the production year ? ');
} while (typeof productionYear === "undefined" || productionYear === "");

do {
    castMembers = readlineSync.question('What are your favorite cast members ? ');
} while (typeof castMembers === "undefined" || castMembers === "");  

tvSerie.name = name;
 tvSerie.productionYear = productionYear;
 tvSerie.castMembers = castMembers;
};  
    
         askTvSerie(); 
        console.log(tvSerie);


        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }
          
            return array;
          }
          
          // Used like so
          var arr = [2, 11, 37, 42];
          arr = shuffle(arr);
          console.log(arr);





/* 
        let i=0;
        function randomizeCast(name,productionYear,castMembers){
            if (
                i = Math.floor((Math.random() * 10) + 1);
                i=i+a+b;
            );
                console.log("Random cast of you answers " + i );
            }
 */








            /* do {
                Math.random();
            } while (i = 0, i < 5, i++);
             
            do {
                productionYear = 1;
            } while (i = 0, i < 5, i++);
            
            do {
                castMembers = 2,3,4;
            } while (i = 0, i < 5, i++);  
            
             name = 0;
             productionYear = 1;
             castMembers = 2,3,4;
            };  
                
                     randomizeCast(); 
                    console.log(tvSerie);
             */












       /*  function randomizeCast(tvSerie) {
            return RandomSource(askTvSerie)
        }
 */

/* let vSerie = [1, 2, 3, 4, 5, 6];

function randomizeCast() {
  for (let i = array.length - 1; i > 0; i--) {
    let  = Math.floor(Math.random() * (i + 1));
  }
  return tvSerie;
}

let result = shuffle(tvSerie);
askrandomCast();
console.log(JSON.stringify(result)); */