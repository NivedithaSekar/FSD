/**
 * Do the below programs in anonymous function & IIFE
 * h) Rotate an array by k times
 */

//Anonymous Function
var rotateBy = function(array, n_times){
    let temp = 0;
    n_times = n_times % array.length;
    for (let i = 0; i < n_times; i++) {
        temp = array.pop();
        array.unshift(temp);
  }
 return array;
}

const array = [1,2,3,4,5,6];
var n_times = 4
console.log(rotateBy(array,n_times))

//IIFE
console.log((function(array,n_times){
    let temp = 0;
    n_times = n_times % array.length;
    for (let i = 0; i < n_times; i++) {
        temp = array.pop();
        array.unshift(temp);
  }
 return array;
})([1,2,3,4,5,6], n_times))