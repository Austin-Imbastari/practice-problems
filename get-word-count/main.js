/*
! define function named getWordCount
* parameter named word
* result = 0
* need to loop over the string.
* outputs a number
*/

const getWordCount = (word) => {
  let result = 0

  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === ' ') {
      result++;
    }
  }
  return result + 1
}

console.log(getWordCount("This is a sample sentence"));
console.log(getWordCount("Han shot first"));
