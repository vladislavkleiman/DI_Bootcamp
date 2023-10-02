const form = document.forms[0]
console.log(form);

const radius = form.elements.radius
console.log(radius);

const volume = form.elements.volume

const submitButton = form.submit

radius.addEventListener("input", e => {
    if(isNaN(radius.value)){
        alert('pls enter number')
    }}
) 

function calculateVolume (e) {
    e.preventDefault();
    volume.value = 4 / 3 * Math.PI * Math.pow(radius.value, 3);
    console.log('volume =', volume.value);
}


submitButton.addEventListener('click', calculateVolume)



