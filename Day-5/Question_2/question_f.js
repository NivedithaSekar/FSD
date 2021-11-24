/**
 * Arrow Function
 * f) Return median of two sorted arrays of same size
 */

//Function Definition
/**
 * getMedian logic - length will be even; find the index of the middle element in an array and add them
 * array1, array2 - PARAMETER(should be of same size)
 * concatenate two arrays to a single array and sort 
 */
var getMedian = (array1, array2) => {
    let array = array1.concat(array2).sort((a,b)=> a-b);
    return (array[array.length/2]+array[array.length/2 +1])/2;
}
const array1 = [3,2,1];
const array2 = [4,5,6];
console.log(getMedian(array1, array2));