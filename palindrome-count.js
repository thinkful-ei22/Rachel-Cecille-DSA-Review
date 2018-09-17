// Given a string, write an algorithm to see how many words in the string are
// palindromes, then output the palindromes as well as the palindromes count.
//
// Input: "Dad gave mom a Tesla as a racecar"
// Output: Dad, mom, racecar, 3 Palindromes

//What defines a palindrome - each word has all pairs ane single

function isPalindrome(word) {
  let counter = 0;
  word = word.toLowerCase();
  for(let i = 0; i < word.length; i++) {
    if(word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      counter++
    }
  }
  if(counter === 1) {
    return true;
  } else {
    return false;
  }
}

function palindromeFilter(str) {
  let strArr = str.split(' ');
  let newArr = []

  for(let i = 0; i < strArr.length; i++) {
    if(isPalindrome(strArr[i])) {
      newArr.push(strArr[i])
    }
  }
  console.log(newArr, `Palindrome count: ${newArr.length}`);
}

console.log(palindromeFilter('Dad gave mom a Tesla as a racecar'));
