//ex1

let lang = prompt('enter language')
let lang_res = lang.toLowerCase();

switch (lang_res) {
    case 'french':
        console.log('Bonjour');
        break;
    case 'english':
        console.log('Hello');
        break;
    case 'hebrew':
        console.log('Shalom');
        break;
    default:
        console.log('01110011 01101111 01110010 01110010 01111001');
        break;
}

//ex 2

let grade = Number(prompt('enter your grade'));

if (grade > 90) {
    console.log('A');
} else if (grade >= 80 && grade <= 90) {
    console.log('B');
} else if (grade >= 70 && grade < 80) {
    console.log('C');
} else {
    console.log('D');
}

//ex3

let verb = prompt('enter verb');

let verb_leng = verb.length;

let last_three = verb.slice(verb_leng - 3, verb_leng);

let ending1 = 'ing';
let ending2 = 'ly';


if (verb_leng > 3 && last_three != ending1) {
    console.log(verb + ending1);
} else if (verb_leng > 3 && last_three == ending1) {
    console.log(verb + ending2);
} else if (verb_leng <= 3){
    console.log(verb);
}
