const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let num = 0;

colors.forEach((color, num) => console.log(`${num+1}# choice is ${color}`));


colors.forEach((color) =>{
    color==="Violet" ? console.log('Yeah'):console.log('No')
 })