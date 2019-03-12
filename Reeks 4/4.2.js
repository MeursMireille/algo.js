
let i=0;

function rand10(a,b) {
    i = Math.floor((Math.random() * 10) + 1);
    i=i+a+b
    console.log(i);
    }
  
  rand10(6,8);
  rand10(1,5); 

  // (Math.floor((Math.random() * 10) + 1)  is om een random getal weer te geven

  //extra oefening
/*   let p=0;

  function kiss(k,i,s,) {
    p = Math.floor((Math.random() * 10) + 1);
    p=p+k+i+s
    console.log(p);
  }

  kiss(3,6,9);
  kiss(2,4,6,8); */