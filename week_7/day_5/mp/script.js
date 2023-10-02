const button_GQ = document.querySelector('.button_GQ')
const quoteElement = document.querySelector('.quote')
const authorElement = document.querySelector('.author')
const amountCharsWithSpace = document.querySelector('.amountCh')
const amountChWS = document.querySelector('.amountChWS')
const amWrds = document.querySelector('.amWrds')
const countLike = document.querySelector('.countLike')

console.log(amountCharsWithSpace);

function cleanArraytwiceUsedNumber(){
    if (twiceUsedNumber.length == 2) {
        twiceUsedNumber = [];
    }
}

function cleanElement(){
    amWrds.innerText = ''
    amountChWS.innerText = ''
    amountCharsWithSpace.innerText = ''
    authorElement.innerText = ''
    quoteElement.innerText = ''
}

function countLetters(str) {
    return str.replace(/\s+/g, '').length;
}

const quotesArray = [
  { id: 0, author: "John Doe", quote: "Life is what you make it.", like: 0 },
  { id: 1, author: "Jane Smith", quote: "Dream big and dare to fail.", like: 0 },
  { id: 2, author: "Robert Brown", quote: "Every moment is a fresh beginning.", like: 0 },
  { id: 3, author: "Emily White", quote: "Change the world by being yourself.", like: 0 },
  { id: 4, author: "Michael Green", quote: "Every day brings new choices." , like: 0},
  { id: 5, author: "Anna Black", quote: "Life is a journey, not a destination.", like: 0 },
  { id: 6, author: "William Grey", quote: "Believe in yourself and all that you are.", like: 0 },
  { id: 7, author: "Lucy Pink", quote: "The future belongs to those who believe in the beauty of their dreams.", like: 0 },
  { id: 8, author: "Ethan Purple", quote: "Happiness is not by chance, but by choice.", like: 0 },
  { id: 9, author: "Sophia Yellow", quote: "Life is short, and it's up to you to make it sweet.", like: 0 },
  { id: 10, author: "James Orange", quote: "The purpose of life is to live it.", like: 0 },
  { id: 11, author: "Olivia Red", quote: "Life is made of ever so many partings welded together.", like: 0 },
  { id: 12, author: "Benjamin Violet", quote: "Life is trying things to see if they work.", like: 0 },
  { id: 13, author: "Grace Indigo", quote: "Life is really simple, but we insist on making it complicated.", like: 0 },
  { id: 14, author: "Jacob Teal", quote: "Life is ours to be spent, not to be saved.", like: 0 },
  { id: 15, author: "Emma Cyan", quote: "Life is either a daring adventure or nothing at all.", like: 0 },
  { id: 16, author: "Noah Blue", quote: "Life is a mixture of sunshine and rain.", like: 0 },
  { id: 17, author: "Ava Green", quote: "Life is what we make it, always has been, always will be.", like: 0 },
  { id: 18, author: "Liam Brown", quote: "Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.", like: 0 },
  { id: 19, author: "Isabella Black", quote: "Life is 10% what happens to us and 90% how we react to it.", like: 0 },
  { id: 20, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance you must keep moving.", like: 0 },
  { id: 21, author: "Albert Einstein", quote: "Imagination is more important than knowledge.", like: 0 },
  { id: 22, author: "Albert Einstein", quote: "Look deep into nature, and then you will understand everything better.", like: 0 },
  { id: 23, author: "Mark Twain", quote: "The two most important days in your life are the day you are born and the day you find out why.", like: 0 },
  { id: 24, author: "Mark Twain", quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", like: 0 },
  { id: 25, author: "Mark Twain", quote: "Truth is stranger than fiction, but it is because Fiction is obliged to stick to possibilities; Truth isn't.", like: 0 },
  { id: 26, author: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", like: 0 },
  { id: 27, author: "Maya Angelou", quote: "You can't use up creativity. The more you use, the more you have.", like: 0 },
  { id: 28, author: "Maya Angelou", quote: "Try to be a rainbow in someone's cloud.", like: 0 },
  { id: 29, author: "Steve Jobs", quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", like: 0 },
  { id: 30, author: "Steve Jobs", quote: "Innovation distinguishes between a leader and a follower.", like: 0 },
  { id: 31, author: "Steve Jobs", quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.", like: 0 },
  { id: 32, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", like: 0 },
  { id: 33, author: "Oscar Wilde", quote: "Always forgive your enemies; nothing annoys them so much.", like: 0 },
  { id: 34, author: "Oscar Wilde", quote: "To live is the rarest thing in the world. Most people exist, that is all.", like: 0 }
];

let quotesArrayLenth = quotesArray.length


let twiceUsedNumber = []
let usedNumber = []


function generateQuote() {
    cleanElement()
    let number;
    do {
        number = Math.floor(Math.random() * quotesArray.length);
    } while (twiceUsedNumber.includes(number))
    twiceUsedNumber.push(number);
    usedNumber.push(number);
    const pq = document.createElement('p');
    pq.innerText = quotesArray[number].quote;
    quoteElement.appendChild(pq);
    const pa = document.createElement('p');
    pa.innerText = quotesArray[number].author;
    authorElement.appendChild(pa)
    amountCharsWithSpace.innerText = quotesArray[number].quote.length
    amountChWS.innerText = countLetters(quotesArray[number].quote);
    amWrds.innerText = quotesArray[number].quote.split(' ').length;
    cleanArraytwiceUsedNumber()
    return quotesArray[number]
}


function like() {
    const lastIndex = usedNumber[usedNumber.length - 1];
    quotesArray[lastIndex].like += 1;
    console.log(quotesArray[lastIndex], quotesArray[lastIndex].like);
    countLike.innerHTML = quotesArray[lastIndex].like
}

function quotesOneAuthor(){
    const lastIndex = usedNumber[usedNumber.length - 1];
    const authorQuote = quotesArray[lastIndex].author;
    quoteElement.innerText = ''
    quotesArray.forEach((quoteObj) => {
        if (quoteObj.author === authorQuote) {
            const newElem = document.createElement('p');
            newElem.innerText = quoteObj.quote;
            quoteElement.appendChild(newElem);
        }
    });
}




function nextQuote() {
    let lastIndex = (usedNumber[usedNumber.length - 1] + 1) % quotesArray.length;
    const authorQuote = quotesArray[usedNumber[usedNumber.length - 1]].author;
    let found = false;

    for (let i = lastIndex; i < quotesArray.length; i++) {
        if (quotesArray[i].author === authorQuote && !usedNumber.includes(i)) {
            displayQuote(quotesArray[i]);
            found = true;
            break;
        }
    }


    if (!found) {
        for (let i = 0; i < lastIndex; i++) {
            if (quotesArray[i].author === authorQuote && !usedNumber.includes(i)) {
                displayQuote(quotesArray[i]);
                break;
            }
        }
    }
}

function previousQuote() {
    let lastIndex = usedNumber[usedNumber.length - 1] - 1; 
    if (lastIndex < 0) lastIndex = quotesArray.length - 1; 
    const authorQuote = quotesArray[usedNumber[usedNumber.length - 1]].author;
    let found = false;


    for (let i = lastIndex; i >= 0; i--) {
        if (quotesArray[i].author === authorQuote && !usedNumber.includes(i)) {
            displayQuote(quotesArray[i]);
            found = true;
            break;
        }
    }


    if (!found) {
        for (let i = quotesArray.length - 1; i > lastIndex; i--) {
            if (quotesArray[i].author === authorQuote && !usedNumber.includes(i)) {
                displayQuote(quotesArray[i]);
                break;
            }
        }
    }
}

function displayQuote(quoteObj) {
    const newElem = document.createElement('p');
    newElem.innerText = quoteObj.quote;
    quoteElement.appendChild(newElem);
    usedNumber.push(quoteObj.id);

    const newElemAuthor = document.createElement('p');
    newElemAuthor.innerText = quoteObj.author;
    authorElement.appendChild(newElemAuthor);

    amountCharsWithSpace.innerText = quoteObj.quote.length;
    amountChWS.innerText = countLetters(quoteObj.quote); 
    amWrds.innerText = quoteObj.quote.split(' ').length;
}
