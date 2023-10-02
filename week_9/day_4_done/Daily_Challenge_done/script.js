//https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
const inputGifName = document.getElementById('inputSearch')
const gifs = document.getElementById('gifs')
let xhr = new XMLHttpRequest();

document.getElementById('submit').addEventListener('click', submitInputGif)
document.getElementById('deleteAll').addEventListener('click', deleteAllGif)




function submitInputGif(event){
    event.preventDefault();
    const inputGifNameValue = inputGifName.value
    const fullURL = `https://api.giphy.com/v1/gifs/search?q=${inputGifNameValue}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`
    console.log(fullURL);
    xhr.addEventListener('load', getGif)
    xhr.open('GET', fullURL)
    xhr.send();
}

function getGif(event){
    const response = JSON.parse(event.target.response)
    const imageURL = response.data[0].images.fixed_width.webp
    createElemGif(imageURL)
}

function createElemGif(url){
    const divElem = document.createElement('div');
    gifs.appendChild(divElem)
    const gifElem = document.createElement('img');
    gifElem.src = url
    divElem.appendChild(gifElem)
    const deleteBNT = document.createElement('button')
    deleteBNT.innerText = 'Delete'
    divElem.appendChild(deleteBNT)
    deleteBNT.addEventListener('click',deleteOneGif)
}

function deleteAllGif(){
    gifs.removeChild();
}

function deleteOneGif(event){
    event.target.parentElement.remove()
}


