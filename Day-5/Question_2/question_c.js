/**
 * Arrow Function
 * c) Sum of all numbers in an array
 */

//Function Declaration/Definition
/**
 * numbers - PARAMETER
 * [1,2,3,4,5] => reducing(summing) we use reduce function to sum the array values together
 *      reduce(1,2) => 3 ; reduce(3,3) => 6; reduce(6,4)=> 10; reduce(10,5)=>15
 */
var summation = (numbers) => {
    // Here 
    return numbers.reduce((previous, current) => previous + current);
}

var numbers = [1,2,3,4,5];
console.log(summation(numbers));
