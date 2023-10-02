//part1

function makeJuice (sizeDrink) {
    function addIngredients (firstIngredient,secondIngredient,thirdIngredient) {
        const sentence = `The client wants a ${sizeDrink} juice, containing ${firstIngredient}, ${secondIngredient}, ${thirdIngredient}`
        const p = document.createElement('p')
        p.innerText = sentence
        document.body.appendChild(p)
    }

    addIngredients('1','2','3')
}

makeJuice('big')

//part2

function makeJuice2 (sizeDrink) {
    const ingredients = []
    function addIngredients2 (firstIngredient,secondIngredient,thirdIngredient) {
        ingredients.push(firstIngredient,secondIngredient,thirdIngredient)
    }
    addIngredients2('1','2','3')
    addIngredients2('4','5','6')

    function displayJuice (ingredients) {
        const firstPart = `The client wants a ${sizeDrink} juice, containing `
        let secondPart = ''
        const lastElem = (ingredients, index) => index === ingredients.length - 1
        ingredients.forEach ((ingredient,i) => {
            const ingr = `${ingredient}${lastElem(ingredients,i) ? '.' : ','}`;
            secondPart += ingr;
        });
        const sentence2 = firstPart + secondPart
        console.log(sentence2);
        const p2 = document.createElement('p')
        p2.innerText = sentence2
        document.body.appendChild(p2)
    }
    displayJuice (ingredients)
}

makeJuice2('big')