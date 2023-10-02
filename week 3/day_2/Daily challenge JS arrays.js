// ex 1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//1

let indx = fruits.indexOf('Banana');
fruits.splice(indx,1);

console.log(fruits);

//2

fruits.sort();
console.log(fruits);

//3

fruits.push('Kiwi');
console.log(fruits);

//4

indx = fruits.indexOf('Apples');
fruits.splice(indx,1);

console.log(fruits);

//5


fruits.reverse();
console.log(fruits);




//ex 2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

let y = moreFruits[1][1][0];
console.log(y);