/**
 * Do the below programs in anonymous function & IIFE
 * e) Return all the palindromes in an array
 */

//Anonymous Function
var findPalindromes = function(array){
    const palindromeValues = [];
    for(let i = 0; i < array.length; i++){
        let value = array[i].toString();
        let reversedValue = value.split("").reverse().join("");
        if(value == reversedValue){
            palindromeValues.push(value)
        }
    }
    return palindromeValues;
}

const array = ["hello", "bab", "taat", "bell", 121, 1234, 1221]
console.log(findPalindromes(array));

//IIFE
console.log(
    (function(array){
        const palindromeValues = [];
        for(let i = 0; i < array.length; i++){
            let value = array[i].toString();
            let reversedValue = value.split("").reverse().join("");
            if(value == reversedValue){
                palindromeValues.push(value)
            }
        }
        return palindromeValues;
    })(["babab","apple","dad",123,4004,"mom"])
)