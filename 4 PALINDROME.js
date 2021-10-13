function palindromeSieve(array){
  let result = [];
  for(let i = 0; i < array.length; i++){
    let str = String(array[i])
    let str_arr = str.split('');
    let obj = {};
    for(let i = 0; i < str_arr.length; i++){
      if(obj[str_arr[i]]){
        ++obj[str_arr[i]]
      }
      else{
        obj[str_arr[i]] = 1;
      }
    }
    let values = Object.values(obj);
    let filtered_values = values.filter(item => item % 2 !== 0);
    if(filtered_values.length > 1){
      continue;
    }
    else{
      result.push(array[i])
    }   
  }
  return result;
}

console.log(palindromeSieve([443, 12, 639, 121, 3232]))
console.log(palindromeSieve([5, 55, 6655, 8787]))
console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]))