
let a =[5,8,9,3];
let b = [4,6,7];

//This will calculate the average of the array given above.
function average(arr){
    let total = 0;

    //for the length of the given array, we will count up the given amount and devide it by the length.
    for(var i = 0; i < arr.length; i++){
    total += arr[i];
    }

    console.log (total/arr.length);
}
average(a);
average(b);

//extra oefening
    /* x = 5;
    y = 8;
    function average(x,y) {
    console.log((x,y)/2);       
    };
    average(x,y); */


//Calculates the min value of the array.


function min(arr){
    console.log (Math.min (...arr));
}
min(a);

//Calculates the max value of the array.
function max(arr){
    console.log (Math.max (...arr));
}
max(b);



/* //Function to call all results in the end (is just an extra.)
function callAll(){
    console.log(average(a));
    console.log(min(a));
    console.log(max(a));
}
 */
/* const readlineSync = require("readline-sync"); */

/* // We ask the user how many random numbers should be generated.
let n = parseInt(readlineSync.question("How many numbers do you want? ")); 
// Empty array that will be filled later on.
let arr=[];


// we call the multirand function to repeat the push.
for( i = 0; i < n; i++){
    multirand(n);
} */
//Call the logs.
/* callAll(); */
