/*
* define a function sumArray
! output = [10,10] = 20;
* parameter = arr
* assign result = 0 because we  need to add
* need to +=
* return result
* need to loop over the array.
*/

let sumArray = (arr) => {
  let result = 0
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]
  }
  return result
}

console.log(sumArray([10,5,3,7,2]))
