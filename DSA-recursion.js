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
