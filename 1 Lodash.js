// findIndex

const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

function findIndex(arr, predicate, fromIndex = 0){
  let type = typeof predicate;
  if(Array.isArray(predicate)) type = 'array';
  
  switch(type){
    case 'function':
      return fn1(arr, predicate, fromIndex);
    case 'object':
      return fn2(arr, predicate, fromIndex);
    case 'array':
      return fn3(arr, predicate, fromIndex);
    case 'string':
      return fn4(arr, predicate, fromIndex);
  }
}

const fn1 = (arr, predicate, fromIndex) => {
  for(let i = fromIndex; i < arr.length; i++){
    if(predicate(arr[i])){
      return i
    }
  }
  return -1;
}

const fn2 = (arr, predicate, fromIndex) => {
  for(let i = fromIndex; i < arr.length; i++){
    if(JSON.stringify(arr[i]) === JSON.stringify(predicate)){
      return i
    }
  }
  return -1;
}

const fn3 = (arr, predicate, fromIndex) => {
  let [key, value] = predicate;
  for(let i = fromIndex; i < arr.length; i++){
    if(arr[i][key] === value){
      return i;
    }
  }
  return -1;
}

const fn4 = (arr, predicate, fromIndex) => {
  for(let i = fromIndex; i < arr.length; i++){
    if(arr[i][predicate]){
      return i
    }
  }
    return -1
}

console.log(findIndex(users, function(o) { return o.user == 'barney'; }, 0))
console.log(findIndex(users, { 'user': 'fred', 'active': false }, 0))
console.log(findIndex(users, ['active', false], 0))
console.log(findIndex(users, 'active'))

// flatten

function flatten(arr){
  return arr.reduce((acc, item) => acc.concat(item), []);
}
console.log(flatten([1, [2, [3, [4]], 5]]))

// flattenDeep

let arr = [1, [2, [3, [4]], 5]];

function deepFlatten(arr){
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? deepFlatten(item) : item)
  }, [])
}

console.log(deepFlatten(arr))

// join

function join(arr, separator) {
  return arr.reduce((acc, item, index) => {
    debugger;
    return acc.concat(index !== arr.length ? separator + item : item)
  })
};

console.log(join(['a', 'b', 'c'], '~~~'))

// indexOf

function indexOf(arr, value, separator = 0){
  arr = arr.splice(separator);
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === value){
      return i + separator
    }
  }
}

console.log(indexOf([1, 2, 1, 2], 2))
console.log(indexOf([1, 2, 1, 2], 2, 2))

// pull

function pull(array, ...value){
  for(let i = 0; i < value.length; i++){
    for(let j = 0; j < array.length; j++){
      if(value[i] === array[j]){
        array.splice(j, 1)
      }
    }
  }
  return array;
}

console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'))
console.log(pull([1, 2, 3, 1, 3, 4, 1, 5], 1, 5))
console.log(pull(['a', 'b', 'c', 'd'], 'c'))

// remove

let array = [1, 2, 3, 4];

function fn(n){
  return n % 2 === 0;
}

function remove(array, fn){
  return array.reduce((acc, item) => {
    if(fn(item)){
      return acc.concat(item)
    }
    else{
      return acc;
    }
  }, [])
}

console.log(array)
console.log(remove(array, fn))

// reverse

function reverse(arr) {
  for(let i = 0; i < arr.length / 2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - i - 1], arr[i]];
  }
  return arr;
};


console.log(reverse([1, 2, 3, 4, 5, 6, 7]));

// tail

function till(array){
  return array.splice(1)
}
console.log(till([1, 2, 3]))

// castArray

function castArray(arg){
  if(arguments.length === 0){
    return [];
  }
  return [arg]
}

console.log(castArray(1))
console.log(castArray({ 'a': 1 }))
console.log(castArray('abc'))
console.log(castArray(null))
console.log(castArray(undefined))
console.log(castArray())

// every

const users = [
  { 'user': 'barney', 'age': 36, 'active': false },
  { 'user': 'fred',   'age': 40, 'active': false }
];

function every(collection, predicate){
  let type = typeof predicate;
  if(Array.isArray(predicate)) type = 'array';
  
  switch(type){
    case 'function':
      return fn1(collection, predicate);
    case 'object':
      return fn2(collection, predicate);
    case 'array':
      return fn3(collection, predicate);
    case 'string':
      return fn4(collection, predicate);
    default:
      return 'invalid input!!!';
  }
}

const fn1 = (collection, predicate) => {
  for(let item of collection){
    if(!predicate(item)){
      return false
    }
  }
  return true
}

const fn2 = (collection, predicate) => {
  for(let item of collection){
    for(let key in predicate){
      if(item[key] !== predicate[key]){
        return false
      }
    }
  }
  return true
}

const fn3 = (collection, predicate) => {
  let [key, value] = predicate;
  
  for(let item of collection){
    if(item[key] !== value){
      return false
    }
  }
  return true;
}

const fn4 = (collection, predicate) => {
  for(let item of collection){
    if(!item[predicate]){
      return false
    }
  }
  return true
}

console.log(every([true, 1, null, 'yes'], Boolean))
console.log(every(users, { 'user': 'barney', 'active': false }))
console.log(every(users, ['active', false]))
console.log(every(users, 'active'))

// filter

const users = [
  { 'user': 'fred', 'age': 40, 'active': false },
  { 'user': 'barney', 'age': 36, 'active': true },
];

function filter(collection, predicate){

  let type = typeof predicate;
  if(Array.isArray(predicate)) type = 'array';
  
  switch(type){
    case 'function':
      return f1(collection, predicate);
    case 'object':
      return f2(collection, predicate);
    case 'array':
      return f3(collection, predicate);
    case 'string':
      return f4(collection, predicate);
    default:
      return 'invalid value';
  }
}

const f1 = (collection, predicate) => {
  let result = [];
  for(let item of users){
    if(predicate(item)){
      result.push(item)
    }
  }
  return result
}

const f2 = (collection, predicate) => {
  let result = [];
  for(let item of users){
    let sum = 0;
    for(let key in predicate){
      if(item[key] !== predicate[key]){
        break;
      }
      else{
        ++sum;
      }
    }
    if(sum === Object.keys(predicate).length){
      result.push(item)
    }
  }
  return result;
}

const f3 = (collection, predicate) => {
  let result = [];
  let [key, value] = predicate;
  for(let item of collection){
    if(item[key] === false){
      result.push(item)
    }
  }
  return result;
}

const f4 = (collection, predicate) => {
  let result = [];
  for(let item of collection){
    if(item[predicate]){
      result.push(item)
    }
  }
  return result;
}


console.log(filter(users, function(o) { return !o.active; }))
console.log(filter(users, { 'age': 36, 'active': true }))
console.log(filter(users, ['active', false]))
console.log(filter(users, 'active'))