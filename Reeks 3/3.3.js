const arr = [1,2,3,4,5];

// Spread Operator  
//const arr1 = [...arr];

// Slice Operator
const arr2 = arr.slice();
console.log(arr2);


// Concat
//const arr3 = [].concat(arr)

// Array.from()
//const arr4 = Array.from(arr);

// For loop
/* function arr5(arr) {
  let newArr = [];
  for(let i=0; i<arr.length; ++i) {
      newArr[i] = arr[i];
  }
  return arr;
} */
/* 
Note: All of the above are shallow copies. If the original array is multi-dimensional there will be problems since you need a deep copy.

You can solve this by serializing the entire array to JSON and then de-serializing it, but this results in bad performance and doesn’t work with special objects.

  const dupArray = JSON.parse(JSON.stringify(arr))
 */


