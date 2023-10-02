const paragraph = document.createElement("p");
paragraph.textContent = 'Hello World';

function hello () {
    alert('Hello World')
}

setTimeout(hello, 2000)

const divTag = document.querySelector('#container')
console.log(divTag);

function addP () {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'Hello World';
    divTag.appendChild(paragraph)
}

setTimeout(addP, 2000)

function newAddP () {
    const paragraph = document.createElement("p");
    paragraph.textContent = 'Hello World';
    divTag.appendChild(paragraph)
    if (divTag.children.length < 5){
        divTag.appendChild(paragraph)
    } else {
        stopTime()
    }
}

const interval = setInterval((newAddP), 2000);

const btn = document.querySelector('#clear')

function stopTime() {
    clearInterval(interval)
}

btn.addEventListener('click', stopTime)