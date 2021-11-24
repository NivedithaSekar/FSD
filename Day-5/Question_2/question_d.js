/**
 * Arrow Function
 * d) Return all the prime numbers in an array
 */

//Function Declaration/Definition
/**
 * isPrime - get all the factors of number and check whether its prime/not
 *    if prime -> factors would be [1, num]
 * num - PARAMETER (e.g 5)
 * [0,1,2,3,4,5] => filtering
 *    0 => 5%0 === 0? = false
 *    1 => 5%1 === 0? = true
 *    2 => 5%2 === 0? = false
 *    3 => 5%3 === 0? = false
 *    4 => 5%4 === 0? = false
 *    5 => 5%5 === 0? = true
 * factors = [1,5]
 * Comparing 2 array abjects can be done using JSON.stringify() method 
 */
var isPrime = (num) => {
    let factors = [...Array(num+1).keys()].filter((i) => num%i === 0)
   return JSON.stringify(factors) == JSON.stringify([1,num]);
}
//Function Declaration/Definition
/**
 * array - PARAMETER
 * [1,2,3,4,5,6,7,8,9,10,11,12] => filtering
 *    1 => isPrime(1) => false
 *    2 => isPrime(2) => true
 *    3 => isPrime(3) => true
 *    4 => isPrime(4) => false ....
 * final result: [ 2, 3, 5, 7, 11 ]
 */
var findPrimeNumbers = function(array){
   return array.filter((num) => (isPrime(num)))
}
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(findPrimeNumbers(array));