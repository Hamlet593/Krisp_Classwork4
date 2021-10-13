/*Create a function that returns all pairs of numbers in an array that sum to a target.
Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]] // 2 + 5 = 7, 3 + 4 = 7
allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]
allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]] // Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]*/

function allPairs(arr, sum){
  let result = [];
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length; i++){
    let eachArr = [];
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === sum){
        eachArr.push(arr[i], arr[j]);
        break;
      }
    }
    result.push(eachArr)
  }
  return result.filter(item => item.length);
}

console.log(allPairs([2, 4, 5, 3], 7))
console.log(allPairs([5, 3, 9, 2, 1], 3))
console.log(allPairs([4, 5, 1, 3, 6, 8], 9))