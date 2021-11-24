/**
 * Do the below programs in anonymous function & IIFE
 * a) Print odd numbers in an array
 */
/**
 * Anonymous Function - often not accessible after its initial creation
 * and will not have function_name in between "function" keyword and ()
 * Here we assign this function to a variable name to call it later
 * MOSTLY, Anonymous functions are used as arguments for other functions
 * 
 * IIFE - Creating and executing a function immediatly after its definition
*/
//Anonymous Function
var oddNumber = function(n_numbers){
    const arr = [];
    let count = 0;
    let value = 1;
    while(count < n_numbers){
        arr.push(value);
        value += 2;
        count++;
    }
    return arr;
}
var n_numbers = 5
console.log(oddNumber(n_numbers));

//IIFE
console.log(
    (function(n_numbers){
        const arr = [];
        let count = 0;
        let value = 1;
        while(count < n_numbers){
            arr.push(value);
            value += 2;
            count++;
        }
        return arr;
    })(4)
);
