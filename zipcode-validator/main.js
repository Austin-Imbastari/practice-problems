/*
* define function named zipCodeValidator
* recieves a string
* zip cannot have spaces , only have numbers, must contain only five digits.
! output returns true or false.
*/

const zipCodeValidator = (zip) => {
  let strLength = zip.length;
  // let noLetter = zip.includes("abcdefghijklmnoqrstuvwxyz");
  let noLetter = /[a-zA-Z]/g;
  let noSpace = zip.indexOf(' ')

  if (noLetter.test(zip)) {
    return false
  }

  if (strLength === 5 && noSpace) {
    return true
  } else {
    return false
  }
}
console.log(zipCodeValidator("21594"));
console.log(zipCodeValidator("wedsd"));
console.log(zipCodeValidator("3Eds32"));
console.log(zipCodeValidator("9123465"));
console.log(zipCodeValidator("91234 "));
