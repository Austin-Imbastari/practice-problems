
/*
* define a function named phAnalyzer
! when given a specific # that is between the pH chart it will return a string
* 0-6 = ACID, 7-10 = Neutral, 11-14 = alkaline
* if (0 >= 6 && 6 <= 0) acid
*/

function phAnalyzer (pH) {
  if (pH < 0 || pH > 14) {
    return 'invalid pH value'
  }

  if (pH >= 0 && pH <= 4) {
    return 'acidic';
  } else if (pH > 4 && pH <= 8 ) {
    return 'neutral'
  } else if (pH > 8 && pH <=14) {
    return 'alkaline'
  }
}

console.log(phAnalyzer(1))
console.log(phAnalyzer(5))
console.log(phAnalyzer(9))
console.log(phAnalyzer(15))

