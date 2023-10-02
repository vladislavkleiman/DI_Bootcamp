let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}


const displayGroceries = (obj) => {
    const fruits = obj.fruits
    fruits.forEach(fruit => 
        console.log(fruit));
}

//console.log(displayGroceries(groceries));
//console.log(groceries.other.paid);

const cloneGroceries = () => {
    let user = client;
    user = 'Betty';
    let shopping = groceries;
    shopping.totalPrice = '35$';
    shopping.other.paid = false;

}


console.log(cloneGroceries);