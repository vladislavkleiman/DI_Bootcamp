const lodash = require('lodash')
const {sum,mult} = require('./math.js')

sum(1,2)
mult(2,3)

const numbers = [1,2,5,10]
const sumNumbers = lodash.sum(numbers)
const multNumbers = lodash.mult(numbers)

console.log(sumNumbers);
console.log(multNumbers);