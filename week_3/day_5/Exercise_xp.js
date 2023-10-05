//ex 1

const people = ["Greg", "Mary", "Devon", "James"];

//1
people.shift();

console.log(people);

//2

console.log(people.length);

people[people.length-1] = "Jason";


//3
people.push("Vlad");

console.log(people);

//4
console.log(people.indexOf("Mary"));

console.log(people);

//5
people_copy = people.slice(1,3);
console.log(people_copy);

//6

console.log(people_copy.indexOf('Foo'));  //because "Foo" is not in the array and therefore it is false

//7

let people_copy_length = people_copy.length;
let last = people_copy[people_copy_length - 1];

console.log(last);

//ex 1.2

//1

for (let i in people) {
    console.log(people[i]);
}

//2

let indxDevon = people.indexOf("Devon");
console.log(indxDevon);

for (let i = 0; i <= indxDevon; i++) {
    console.log(people[i]);
}

//ex2

let colors = ['blue', 'red', 'yellow', 'white', 'black'];

for (let i = 0, j = 1; i < colors.length, j <= colors.length; i++, j++) {
    console.log(`My # ${j} choice is ${colors[i]}`);
}

//bonus ex2

let suffix = ['st','nd','rd','th','th']

for (let i = 0, j = 1, x = 0; i < colors.length, j <= colors.length, x < colors.length; i++, j++, x++) {
    console.log(`My ${j}${suffix[x]} choice is ${colors[i]}`);
}

//ex3

let number = prompt('enter number')

while (number < 10) {
    console.log(number);
    number ++;
    number = prompt('enter number')
}

//ex4


//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


//2
console.log(building.numberOfFloors);

//3

let sumApt13 = building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor;
console.log(sumApt13);

//4

console.log(`${building.nameOfTenants[1]} is name second tenant. His number of apartment ${building.numberOfRoomsAndRent.dan[0]}`);

//5

let rentSumSarDav = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.sarah[1];
console.log(rentSumSarDav);

if (rentSumSarDav > building.numberOfRoomsAndRent.dan[1]){
    let allowance = 1200 - building.numberOfRoomsAndRent.dan[1]
    building.numberOfRoomsAndRent.dan[1] = building.numberOfRoomsAndRent.dan[1] + allowance
}

console.log(`New rent Dan is ${building.numberOfRoomsAndRent.dan[1]}`);

//ex 5

family = {
    father: 'strong',
    mother: 'beautiful'
}

for (let i in family) {
   console.log(i);
}

for (let i in family) {
    console.log(family[i]); 
 }

 //ex 6

 const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let sentence = ''

for (const value in details){
    sentence = sentence + " " + value + " " + details[value]
}

console.log(sentence);

//ex7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();

console.log(names);

console.log(names[0][0]);
console.log(names[1][0]);
console.log(names[2][0]);
console.log(names[3][0]);

secret_society = ''

for (let i = 0; i <names.length; i++) {
    console.log(names[i][0])
    secret_society = secret_society + names[i][0]
}

console.log(secret_society);






