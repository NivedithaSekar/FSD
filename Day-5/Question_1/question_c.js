/**
 * Do the below programs in anonymous function & IIFE
 * c) Sum of all numbers in an array
 */

//Anonymous Function
var summation = function(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

var numbers = [1,2,3,4,5,6,7,8,9];
console.log(summation(numbers));

//IIFE
console.log(
    (
        function(numbers){
            let sum = 0;
            for(let i=0; i<numbers.length; i++){
                sum += numbers[i];
            }
            return sum;
        }
    )([1,2,3,4])
);