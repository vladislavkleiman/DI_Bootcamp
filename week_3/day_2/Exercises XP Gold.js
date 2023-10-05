//ex 1

let sentence = ["my","favorite","color","is","blue"];

let text = sentence.join(" ");

console.log(text);

//ex 2

let str1 = "mix";
let str2 = "pod";

let newWord = '';

let letter1_1 = str1.slice(0,2);
let letter1_2 = str1.slice(2);
console.log(letter1_1);
console.log(letter1_2);

let letter2_1 = str2.slice(0,2);
let letter2_2 = str2.slice(2);

console.log(letter2_1);
console.log(letter2_2);

newWord = '' + letter2_1 + letter1_2 + ' ' + letter1_1 + letter2_2

console.log(newWord);


//ex 3

let num1 = Number(prompt('enter number'));

let num2 = Number(prompt('enter number'));

let sum = num1 + num2

alert(`the sum of the ${num1} and ${num2} is ${sum}`)