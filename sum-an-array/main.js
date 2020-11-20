/*
  ! define a function named sumArray has a parameter names sum
  ! loop through the array
  ! added each index [i]
  * need a result for storage.
  * result +=
*/

const sumArray = (sum) => {
  let result = 0
  for (var i = 0; i < sum.length; i++) {
    result += sum[i]
  }
  return result
}

console.log(sumArray([10,5,3,7,2]))
console.log(sumArray([1,2,3,4,5]))
console.log(sumArray([5,3,7,4]))
