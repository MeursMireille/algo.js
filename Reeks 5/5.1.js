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
        console.log(tvSerie)

     

// expected output: "foo"
/* var object1 = {"name":"Mireille", "productionYear":"1999", "castMembers":"plop"}; 


console.log(object1.name); */


/* var object2 = {a: a, b: b, c: c};
console.log(object2.b); */










/* function askTvSerie(name,year,members) {
    console.log(name,year,members);
}

askTvSerie(name,year,members); */


//extra oefeningen
/* 
let dataMan = {
    firstname: 'Erwin',
    name: 'Beckers',
    age: 45,
    hobby:  
        {
        firstLove: 'biking',
        secondLove: 'mtb',
        }
    
}
console.log(dataMan['firstname']);
console.log(dataMan.name);
dataMan.age = 46;
console.log(dataMan.hobby.firstLove); */


/* Simple objects
At the very base they are quite a simple structure like arrays. Instead of assigning an index to each element they allow to assign them to a string. That string will be called the key and its associated value will be the... value.

let myObject = {
  // we can use the "" notation for the key
  "firstname": "Gerard",
  // ... or just specify it this way if we want
  name: "Lambert",
  // we can use any type for the value
  age: 42
};

// we can use the [] notation to access values
console.log(myObject["age"]); // 25

// ... or the . notation
console.log(myObject.firstname); // Gerard

// we can assign a new value
myObject.age = 54;

// ... and there's a special keyword to delete keys
delete myObject["name"];

console.log(myObject); // {firstname: "Gerard", age: 54}

Objects and Arrays as Tools for Data Structures
By combining objects, arrays and a few simple types we can represent complex data structures suitable to represent most type of data.

{
  "firstname": "Gerard",
  "lastname": "Lambert",
  "age": 42,
  "skills": [
    {
      "skillName": "JavaScript",
      "level": "advanced"
    },
    {
      "skillName": "HTML",
      "level": "advanced"
    }
  ],
  "address": {
    "street": "rue des Campanules",
    "number": "10",
    "city": "Paris",
    "zip": 1000
  }
} */

/* Using JSON in JavaScript
As of 2018, all major browsers support at least the fifth edition ECMAScript which provides[19] a safe and fast method of decoding JSON:

var p = JSON.parse(json_string); */