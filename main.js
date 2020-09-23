// What I Need To Do....

// 1. define a function name digitFilter .
// 2. the function recieves an array [] of a number
// 3. the array will be used to filter the numbere value in the arguement
// 4. return an array
// 5. i know ill need sometype of storage. empty array
// 6. will neeed a loop. to looop through the array.
// 7. if else statement to determine what to push.
// 8. i know i will have to push the values into a new array .push?
// 9. if the numbersarray === number filter push it into results.

  function digitFilter(numbersArray, numberFilter) {
    var result = []
    for(var i = 0; i < numbersArray.length; i++){
      var numberString = numbersArray[i].toString()
      if(numberString.length === numberFilter) {
        result.push(numberString);
      }
    }

    return result
  }

  console.log(digitFilter([23, 312, 24, 243, 43], 3));
  console.log(digitFilter([23, 315, 231, 54, 72], 2));
  console.log(digitFilter([1, 4323, 23, 4565, 3, 4], 1));
