/**
 * Do the below programs in anonymous function & IIFE
 * f) Return median of two sorted arrays of same size
 */

//Anonymous Function
var getMedian = function(array1, array2) {
    if(array1.length == array2.length){
        array1.sort(function(a, b){return a - b});
        array2.sort(function(a, b){return a - b});
        return (array1[array1.length-1]+array2[0])/2;
    }
    else{
        return "Array is of not same size";
    }
}
const array1 = [1,2,3];
const array2 = [4,5,6];
console.log(getMedian(array1, array2));

//IIFE
console.log(
    (function() {
        if(array1.length == array2.length){
            array1.sort(function(a, b){return a - b});
            array2.sort(function(a, b){return a - b});
            return (array1[array1.length-1]+array2[0])/2;
        }
        else{
            return "Array is of not same size";
        }
    })(array1, array2)
);