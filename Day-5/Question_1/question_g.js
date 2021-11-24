/**
 * Do the below programs in anonymous function & IIFE
 * g) Remove duplicates from an array
 */

//Anonymous Function
var removeDuplicates = function(array){
    return array.filter((value, index) => array.indexOf(value) == index);
}

const array = [1,2,3,2,3,4,5,3,"hello","nanny","hello"];
console.log(removeDuplicates(array));

//IIFE
console.log(
    (function(){
        return array.filter((value, index) => array.indexOf(value) == index);
    })(array)
)