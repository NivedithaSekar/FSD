/**
 * Do the below programs in anonymous function & IIFE
 * d) Return all the prime numbers in an array
 */

//Anonymous Function
var findPrimeNumbers = function(array){
    let primeValues = [];
    for(let i=0; i<array.length; i++){
        let num = array[i];
        if(
            (function(){
                let factors = [1,];
                for(let j=2; j<=num;j++){
                    if(num%j == 0){
                        factors.push(j);
                    }
                }
                return JSON.stringify(factors) == JSON.stringify([1,num]);
            })(num)
        ){
            primeValues.push(num);
        }
    }
    return primeValues;
}
const array = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log(findPrimeNumbers(array));

//IIFE
console.log(
    (function(array){
        let primeValues = [];
        for(let i=0; i<array.length; i++){
            let num = array[i];
            if(
                (function(num){
                    let factors = [1,];
                    for(let j=2; j<=num;j++){
                        if(num%j == 0){
                            factors.push(j);
                        }
                    }
                    //console.log(num, factors, JSON.stringify(factors) == JSON.stringify([1,num]));
                    return JSON.stringify(factors) == JSON.stringify([1,num]);
                })(num)
            ){
                primeValues.push(num);
            }
        }
        return primeValues;
    })([99,44,31,11,57,3,97])
)