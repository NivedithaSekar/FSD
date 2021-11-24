/**
 * Arrow Function
 * e) Return all the palindromes in an array
 */

//Function Definition
/**
 * Palindrome logic - Given value and reversed value should be equal
 * array - PARAMETER(may be a number/string)
 */
var findPalindromes = (array) => {
    return array.filter((value) => value.toString().split("").reverse().join("") == value )
}

const array = ["hello", "bab", "taat", "bell", 121, 1234, 1221]
console.log(findPalindromes(array));
