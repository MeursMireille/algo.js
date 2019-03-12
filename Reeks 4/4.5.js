

function calcDistance (x1,y1,x2,y2){

    let x = x1 - x2; //( je doet -min om de afstand te berekenen)
    let y = y1 - y2;
    let d = (Math.pow(x,2))+(Math.pow(y,2)); // x,2 en y,2= x en y tot de tweede (uitkomst wordt z)
     z = Math.sqrt(d); //vierkantswortel (d)
     console.log(z) // z is het aangegeven totaal(*)

 }
calcDistance(1,1,2,2);     //(1=x1, 1=y1, 2=x2, 2=y2)
calcDistance(1,1,3,1);     //(1=x1, 1=y1, 3=x2, 1=y2)
calcDistance(4,1,1,1);     //(4=x1, 1=y1, 1=x2, 1=y2)
calcDistance(-2,2,2,-2);   //(-2=x1, 2=y1, 2=x2, -2=y2)


/* 
Point A = [1, 1], point B = [2, 2] => 1.41 aangegeven totaal(*)
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
 */