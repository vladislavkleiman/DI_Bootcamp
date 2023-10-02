let amountBottles

amountBottles = Number(prompt('Enter number of bottles'))

for (let i = 1; 0 < amountBottles; i++) {
    let newAmountBottles = amountBottles - i
    console.log(`${amountBottles} bottles of beer on the wall ${amountBottles} bottles of beer Take ${i} down, pass it around ${newAmountBottles} bottles of beer on the wall`);
    amountBottles = newAmountBottles
}

console.log('0 bottle of beer on the wall');