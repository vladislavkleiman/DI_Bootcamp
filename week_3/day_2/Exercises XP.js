// ex 1

favorite_food = 'apple';
favorite_meal = 'breakfast';
console.log(`I eat ${favorite_food} at every ${favorite_meal}`);

// ex 2.1

//1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

myWatchedSeriesLength = myWatchedSeries.length

console.log(myWatchedSeriesLength);

//2

myWatchedSeriesSentence = myWatchedSeries.join();
console.log(myWatchedSeriesSentence);

//3
console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`);

// ex 2.2

//1
myWatchedSeries[2] = "friends";

console.log(myWatchedSeries);

//2

myWatchedSeries.push("breaking bad");
console.log(myWatchedSeries);

//3

myWatchedSeries.unshift("succession");
console.log(myWatchedSeries);

//4

myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);

//5
console.log(myWatchedSeries[1][2]);

// ex 3

temperature_C = 20;
temperature_F = temperature_C / 5 * 9 +32;
console.log(`Celsius temperature ${temperature_C} equals Fahrenheit temperature ${temperature_F}`);


// ex 4

let c;
let a = 34;
let b = 21;

console.log(a+b) //55 - just add two numbers

a = 2;

console.log(a+b) //23 - overwrite variable a

c //undefined since there is no let , const ,var

console.log(3 + 4 + '5'); //75 since first we added two numbers and then we add a string and js tries to cast the whole variable to one of the data types, in this case it cast to a string and therefore it turned out 75



// ex 5

typeof(15)
// Number:
// Number:

typeof(5.5)
// Number:
// Number:

typeof(NaN)
// Number:
// Number:

typeof("hello")
// String:
// String:

typeof(true)
// Boolean:
// Boolean:

typeof(1 != 2)
// Boolean:
// Boolean:

"hamburger" + "s"
// hamburgers
// hamburgers

"hamburgers" - "s"
// hamburger:
// Nan:

"1" + "3"
// 13:
// 13:

"1" - "3"
// -2:
// -2:

"johnny" + 5
// johnny5:
// johnny5:

"johnny" - 5
// Nan
// Nan

99 * "hello"
// Nan
// Nan

1 != 1
// false
// false

1 == "1"
// true
// true

1 === "1"
// false
// false






// ex 6
5 + "34"
// 534
// 534

5 - "4"
// 1:
// 1:

10 % 5
// 2
// 0

5 % 10
// 0
// 5

"Java" + "Script"
// JavaScript
// JavaScript

" " + " "
// " "
// " "

" " + 0
// 0
// 0

true + true
// NaN
// 2

true + false
// 1
// 1

false + true
// 1
// 1

false - true
// -1
// -1

!true
// Prediction:
// false

3 - 4
// -1
// -1

console.log("Bob" - "bill")
// NaN
// NaN