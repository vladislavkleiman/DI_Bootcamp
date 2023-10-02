const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

let num = 0;

colors.forEach((color, num) => console.log(`${num+1}# choice is ${color}`));

function getOrdinal(index) {
    return [1,2,3].includes(index) ? ordinal[index] : ordinal[0];
}

colors.forEach((color,index) => {
    const incrementedIndex = index +1;
    console.log((`${incrementedIndex}${getOrdinal(incrementedIndex)} choice is ${color}`));
})