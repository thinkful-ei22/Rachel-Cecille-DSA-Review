//Given a document, implement an algorithm to count the number of word occurrences.

//Input: "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"
//Output: Hello = 1, there = 1, how = 2, are = 1, you = 2

//Solving it recursively

const wordCount = function(str) {
  //First split the words and place them in an array

  const strArr = str.split(' ');

  //Push the words that are recurrent into a separate array
  let recurArr = [];
  for(let i = 0; i < strArr.length; i++) {
    if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
      recurArr.push(strArr[i])
    }
  }

  //Loop through the new array and use a counter to count how many instances
  let counter = 1;
  for(let i = 0; i < recurArr.length; i++) {
    if(recurArr[i] === recurArr[i + 1]) {
      counter++;
      console.log(`${recurArr[i]}: ${counter}`);
      counter = 1;
    }
  }
}

console.log(wordCount("Hello, how are you? Can you tell me how to get to Starbucks?"))
