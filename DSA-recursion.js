//input - 3 (number)
//output 3 - Another sheep jump over the fence

const countSheep = function(num) {
  //Base Case
  if(num === 0) {
    return;
  }

  return `${num} - Another sheep jump over the fence` + countSheep(num - 1);
}

countSheep(3);


//Array double


function arrayDouble(arr) {
  //base case
  if (!arr.length) {
    return [];
  }
  let first = arr[0];
  return [first * 2, ...arrayDouble(arr.slice(1))]
}
console.log(arrayDouble([1,2,3]));
