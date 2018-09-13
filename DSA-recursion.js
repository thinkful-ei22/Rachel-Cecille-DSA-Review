const assert = require('assert');

//input - 3 (number)
//output 3 - Another sheep jump over the fence

const countSheep = function(num) {
  //Base Case
  if(num === 0) {
    return;
  }

  return `${num} - Another sheep jump over the fence` + countSheep(num - 1);
}

// console.log(countSheep(3));


//Array double

function arrayDouble(arr) {
  //base case
  if (!arr.length) {
    return [];
  }
  let first = arr[0];
  return [first * 2, ...arrayDouble(arr.slice(1))]
}
// console.log(arrayDouble([1,2,3]));

//Reverse String

//Input - 'hello'
//Output - 'olleh'

const revStr = function(str) {
  //Base case
    if(str === '') {
      return '';
    }

  //Recursive case
    const lastChar = str.slice(-1);
    return lastChar + revStr(str.slice(0, str.length -1))
}

// console.log(revStr("hello"));

//String Splitter

//Input - 'cat' or 'i love mom'
//Out put - ['c', 'a', 't'] for 1 string and ['i', 'love', 'mom'] for +1 string

const _splitter = function(...args) {
  const [string, deliminator, i, rtn] = args;
  //console.log(args);
  if (!string[i]) { return [...rtn, string]; } // end of the string

  if(string[i] === deliminator){
    return _splitter(
      string.slice(i+1),
      deliminator,
      0,
      [...rtn, string.slice(0, i)]
    );
  }
  return _splitter(string, deliminator, i + 1, rtn);
}

const splitter = function(string, deliminator) {
  return _splitter(string, deliminator, 0, [])
}

assert.deepEqual(splitter('', ''), [''])
assert.deepEqual(splitter('', 'asdf'), [''])
assert.deepEqual(splitter('a,b', ','), ['a', 'b'])
assert.deepEqual(splitter('a,c', ','), ['a', 'c'])
assert.deepEqual(splitter('a,d', ','), ['a', 'd'])
assert.deepEqual(splitter('a,d,f', ','), ['a', 'd', 'f'])
assert.deepEqual(splitter('a,d,f,', ','), ['a', 'd', 'f', ''])
assert.deepEqual(splitter('a,d1,f1', ','), ['a', 'd1', 'f1'])
// assert.deepEqual(splitter('a,,d1,,f1', ',,'), ['a', 'd1', 'f1']) --> Make this test case work
