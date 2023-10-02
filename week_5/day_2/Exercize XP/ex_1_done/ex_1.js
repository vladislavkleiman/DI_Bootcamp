//1

const h1Tag = document.querySelector('h1')

//2

const articleTag = document.querySelector('article')

const lastP = articleTag.lastElementChild

lastP.remove()

//3

const h2Tag = document.querySelector('h2')

h2Tag.addEventListener('click', changeToRed)

function changeToRed () {
    h2Tag.style.backgroundColor = 'red'
}

//4

const h3Tag = document.querySelector('h3')

h3Tag.addEventListener('click', hideH3)

function hideH3 (){
    h3Tag.style.display = "none"
}

//5

function boldP () {
    const paragraphs = document.querySelectorAll('p')
    for (const paragraph of paragraphs) {
        paragraph.style.fontWeight = 'bold'
    }
}


//bonus_1

h1Tag.addEventListener('mouseover', randomFontSize)

function randomFontSize () {
    let number_size = Math.floor(Math.random() * 100);
    h1Tag.style.fontSize = `${number_size}px`
}