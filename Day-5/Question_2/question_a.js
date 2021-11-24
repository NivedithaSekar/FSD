/**
 * Arrow Functions
 * a) Print odd numbers in an array
 */


//function declaration/definition
/** array - PARAMETER
 * for every value in an array check if value%2 (0 if even / 1 if odd)
 * [0,1,2,3,4,5] => filtering
 *      0 => 0%2 = 0 False
 *      1 => 1%2 = 1 True
 *      2 => 2%2 = 0 False
 *      3 => 3%2 = 1 True
 *      4 => 4%2 = 0 False
 *      5 => 5%2 = 1 True
 * Final Result = [1,3,5]
 */
let printOddNumbers = (array) => { return array.filter(value => value%2)};
let n_numbers = 5
// Similar to range(): Creating and declaring an array by assigning the keys of Array(n_numbers+1) i.e from value 0 to n_number
const array = [...Array(n_numbers+1).keys()]; 
console.log(printOddNumbers(array));