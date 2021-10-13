/*Given an array, write a function to calculate its depth. Assume that a normal array has a depth of 1.

depth([1, 2, 3, 4]) ➞ 1
depth([1, [2, 3, 4]]) ➞ 2
depth([1, [2, [3, 4]]]) ➞ 3
depth([1, [2, [3, [4]]]]) ➞ 4*/

function depth(arr){
  return arr.reduce((acc, item) => {
    debugger;
    if(Array.isArray(item)){
      return depth(item) + 1;
    }
    return acc;
  }, 1)
}

console.log(depth([1, 2, 3, 4]));
console.log(depth([1, [2, 3, 4]]));
console.log(depth([1, [2, [3, 4]]]));
console.log(depth([1, [2, [3, [4]]]]))