//ex 1

//part 1

function infoAboutMe() {
  console.log('Vlad, 27 years old');
}

infoAboutMe()

//part 2

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(personName, personAge, personFavoriteColor);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

//ex 2

function calculateTip() {
  let amountBill = Number(prompt('Enter amount of bill'))
  if (amountBill < 50){
    var tip = amountBill * 0.2
  } else if (amountBill >= 50 && amountBill <= 200){
    var tip = amountBill * 0.15
  } else{
    var tip = amountBill * 0.1
  }
  let totalAmount = amountBill + tip

  console.log(`The total amount of going to the restaurant, taking into account the bill ($${amountBill}) and tips ($${tip}), was $${totalAmount}`);
}

calculateTip()

//ex 3

let numbers = 0

function isDivisible(){
  for (let i = 0; i < 500; i++){
    if (i % 23 === 0){
      console.log(i);
      numbers = numbers + i
    }
  }

  console.log(numbers);
}


//bonus

let sum = 0

function isDivisible(divisor){
  for (let i = 0; i < 500; i++){
    if (i % divisor === 0){
      console.log(i);
      sum = sum + i
    }
  }

  console.log(sum);
}



//ex 4

const stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}  

const prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
} 

shoppingList = ['banana', 'orange', 'apple']

let sumFruits = 0

function myBill() {
  for (let i of shoppingList){
    if (i in stock){
      console.log(`Price ${i} equal ${prices[i]}`);
      sumFruits = sumFruits + prices[i];
      stock[i] = stock[i] - 1
    }
  }
console.log(`The sum of all the basket of goods is ${sumFruits}`);

console.log(stock);
}

myBill()


//ex 5

function changeEnough(itemPrice, amountOfChange) {
  console.log('Item price is', itemPrice);
  const sum = calculateSum(amountOfChange)
  if (sum > itemPrice) {
    return true
  } else {
    return false
  }
}

function calculateSum(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    let coinValue
    const numberOfCoins = arr[i]
    if (i === 0){coinValue = 0.25}
    if (i === 1){coinValue = 0.1}
    if (i === 2){coinValue = 0.05}
    if (i === 3){coinValue = 0.01}
    console.log('We have', numberOfCoins, 'that value of', coinValue);

    sum = sum + numberOfCoins * coinValue
  }

  console.log('you own', sum);

  return sum
}

changeEnough(4.25, [25, 20, 5, 0])

//ex 6

function onlyNumbers(str) {
  const regex = new RegExp(/^[0-9]*$/)
  return regex.test(str)
}

function includesNumbers(str) {
  const regex = new RegExp(/\d/)
  return regex.test(str)
}

function hotelCost(amountNights) {

    const costsNight = 140
    let totalPriceCost = Number(amountNights) * costsNight
    console.log(`Total price weekend equal ${totalPriceCost}`);
    return totalPriceCost
}

hotelCost()

function planeRideCost(destination) {
  
  console.log('Your destination is', destination);
  if (destination === 'London') return "$183"
  if (destination === 'Paris') return "$220"
  return '$300'
}

function rentalCarCost (carAnswer){
    const DayCostRental = 40
    if (carAnswer <= 10){
      let totalPriceRental = DayCostRental * carAnswer
      console.log(`total price rental of car equal ${totalPriceRental}`);
      return totalPriceRental
    } else {
      let discount = 0.05
      let totalPriceRental = DayCostRental * carAnswer
      let totalPriceRentalDisc = totalPriceRental - (totalPriceRental * discount)
      console.log(`total price rental of car equal ${totalPriceRentalDisc} with discount 5%`);
      return totalPriceRentalDisc
    }
  }

rentalCarCost()




function totalVacationCost(){
  let hotelAnswer
  let carAnswer
  let destination = ""


 

  while (!onlyNumbers(hotelAnswer)) {
    hotelAnswer = prompt('Please enter amount of nights')
  }
  while (!onlyNumbers(carAnswer)){
    carAnswer = prompt('How much day do you planning get car?')
  }

  while (destination == '' || includesNumbers(destination)){
    destination = prompt('Please type your destination')
  }

  const carPrice = rentalCarCost(carAnswer)
  const hotelPrice = hotelCost(hotelAnswer)
  const planeRideCost = planeRideCost(destination)
  const totalCost = carPrice + hotelPrice + planeRideCost
  console.log('total price', totalCost);
}

totalVacationCost()