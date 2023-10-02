 const object = document.querySelector('#box')

 const getter = document.querySelector('#target')

getter.addEventListener("drop", handleDrop)
getter.addEventListener("dragover", allowDrop)
getter.addEventListener("dragenter", handleDragEnter)
getter.addEventListener("dragleave", handleDragLeave)

function handleDragEnter () {
    console.log('dragenter');
}

function handleDragLeave () {
    console.log('dragleave');
    getter.classList.remove('is-hovered');
}


function allowDrop(event) {
    event.preventDefault();
    console.log('dragover');
    getter.classList.add('is-hovered');
}

function handleDrop(event){
    console.log('handledrop');
    getter.append(object)
    getter.classList.add('is-center')
}