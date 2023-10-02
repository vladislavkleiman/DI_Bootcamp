const object = document.querySelector('#animate');

let distance = 0;
let interval

function myMove() {
    interval = setInterval(moveObj, 1)
}


function moveObj () {
    distance = distance + 1
    object.style.left = distance + "px";
    if (distance === 350){
        clearInterval(interval)
    }
}
