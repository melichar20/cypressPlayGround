function fizzbuzz(num){
    if(num % 3 == 0 && num % 5 == 0) console.log('fizzbuzz')
    if(num % 3 == 0) console.log('fizz')
    if(num % 5 == 0) console.log('buzz')
}

function fizzybuzz(num){
    return num % 3 == 0 && num % 5 == 0 ? 'fizzybuzz' :
                           num % 3 == 0 ? 'fizzy' :
                           num % 5 == 0 ? 'buzz' : 'na'

}

describe('Unit Test FizzBuzz', () => {
    function numsExpectedToEq(arr, expected) {
      // loop through the array of nums and make
      // sure they equal what is expected
      arr.forEach((num) => {
        expect(fizzbuzz(num)).to.eq(expected)
      })
    }
  
    it.only('returns "fizz" when number is multiple of 3', () => {
      numsExpectedToEq([9, 12, 18], 'fizz')
    })
  
    it('returns "buzz" when number is multiple of 5', () => {
      numsExpectedToEq([10, 20, 25], 'buzz')
    })
  
    it('returns "fizzbuzz" when number is multiple of both 3 and 5', () => {
      numsExpectedToEq([15, 30, 60], 'fizzbuzz')
    })
  })