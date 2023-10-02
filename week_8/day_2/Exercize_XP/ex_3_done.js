const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let sentence = epic.reduce((acc,val) => {
    return acc + val;
})

console.log(sentence);