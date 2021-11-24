/**
 * Arrow Function
 * b) Convert all the strings to title caps in a string array
 */

//function declaration/definition
/** sentence - PARAMETER (Maybe a combined value of upper and lowercase values)
 *  "Hello, i'm niVeDitha" =>  "hello, i'm niveditha" => ["hello,","i'm","niveditha"] => mapping
 *   mapping: every word in an array => Function to be performed
 *            "hello" => "H"+"ello," = Hello,
 *             "i'm"  => "I"+"'m"   = I'm
 *             "niveditha" => "N"+"iveditha" = Niveditha
 * Final result => "Hello, I'm Niveditha"    
 */
var titleCase = (sentence) => {
   return sentence.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
}

var sentence = "Hello, i'm niVeDitha";
console.log(titleCase(sentence));

