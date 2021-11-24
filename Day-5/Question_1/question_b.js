/**
 * Do the below programs in anonymous function & IIFE
 * b) Convert all the strings to title caps in a string array
 */

//Anonymous Function
var titleCase = function(sentence){
   let words = sentence.toLowerCase().split(" ");
   for (var i = 0; i < words.length; i++) {
       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
   }
   return words.join(' ');
}
console.log(titleCase("Hello, i'm niVeDitha"));

//IIFE
sentence = "Hello, i'm niVeDitha";
console.log(
    (function(){
        let words = sentence.toLowerCase().split(" ");
        for (var i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
        }
        return words.join(' ');
    })(sentence)
);
