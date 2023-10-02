export const people = [
    { name: 'John', age: '20', location: 'USA'},
    { name: 'Moshe', age: '25', location: 'Israel'},
    { name: 'Inna', age: '20', location: 'Germany'},
]

export const avgAge =  function calcAvgAge (arr) {
    const totalAge = arr.reduce((sum,person) => sum + Number(person.age), 0)
    console.log(totalAge / arr.length); 
}