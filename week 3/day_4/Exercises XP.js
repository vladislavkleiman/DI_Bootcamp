//ex 1

let x = 5;
let y = 7;

if (x > y) {
    console.log('X is the biggest number')
} else if ( x == y) {
    console.log('The numbers are equal')
} else {
    console.log('Y is the biggest number')
}


//ex 2

//1
let newDog = 'Chihuahua';

//2
console.log(newDog.length); //9 letters

//3

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

//4

if (newDog == 'Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}

//ex 3

let number = prompt('Enter number');

if (number % 2 === 0) {
    console.log('x is an even number')
} else {
    console.log('x is an odd number')
};


//ex 4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];


let answer;
switch (users.length) {
    case 0:
        console.log('No one is online');
        break;
    case 1:
        console.log(`${users[0]} is online`);
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
        break;
    default:
        let remaining_us = users.length - 2;
        console.log(`${users[0]}, ${users[1]} and ${remaining_us} more are online`);
        break;
}