/*
Number
bigint
symbol
string
boolean
null
undefined

Object
Array
*/ 

let score = "36"
let number = Number(score)
console.log(typeof number);
console.log(number);    //o/p; 36


let name = "Shivam"
let number2 = Number(name)
console.log(typeof number2);
console.log(number2);    //o/p; NaN

/*
After conversion of all these into 'Number' this is the output:

"33" -> 33
33abc -> NaN
"Shivam" -> Nan
null -> 0
true -> 1
false -> 0
undefined -> NaN

After conversion of all these into 'Boolean' this is the output:
"Shivam" -> True
"" -> false
1 -> true
0 -> false
*/

