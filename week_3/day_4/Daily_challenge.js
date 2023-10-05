let sentence = 'The movie is not that bad, I like it';

let wordNot = 'not';

let wordBad = 'bad';

let indxNot = sentence.indexOf('not');
let indxBad = sentence.indexOf('bad');

console.log(indxNot);

console.log(indxBad);

let lengthBad = wordBad.length;



if (indxBad > indxNot){
    const first_part = sentence.slice(0,indxNot)
    const second_part = sentence.slice(indxBad + lengthBad)
    console.log(first_part + 'good' + second_part)
} else {
    console.log(sentence);
}