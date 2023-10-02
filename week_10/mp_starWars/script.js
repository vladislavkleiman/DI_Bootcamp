const infoArea = document.getElementById('info')
const button = document.getElementById('findSomeone')
let lastNumber = null;


button.addEventListener('click', findInfo)

async function findInfo(event){
    event.preventDefault();
    cleanInfo()
    loadingSpinner();
    try{
        const numberPerson = getRandomNumber()
        let data = await fetch(`https://www.swapi.tech/api/people/${numberPerson}`)
        let dataJson = await data.json()
        const { name, height, gender, birth_year, homeworld } = dataJson.result.properties;
        const nameHomeWorld = await getInfoHomeWorld(homeworld)
        removeSpinner()
        createNEWElement(name,height,gender,birth_year, nameHomeWorld)
} catch(error){
        removeSpinner()
        errorElement()
}

function cleanInfo(){
    infoArea.innerHTML = '';
}

}

async function getInfoHomeWorld(url){
    let datahomeWorld = await fetch(url);
    let datahomeWorldJson = await datahomeWorld.json();
    const nameHomeWorld = datahomeWorldJson.result.properties.name
    return nameHomeWorld
 }

 function createNEWElement(name, height, gender, birth_year, nameHomeWorld) {
    const details = [
        name,
        'Height: ' + height,
        'Gender: ' + gender,
        'Birth Year: ' + birth_year,
        'Home World: ' + nameHomeWorld
    ];

    details.forEach(detail => {
        const element = document.createElement('p');
        element.innerText = detail;
        infoArea.appendChild(element);
    });
}


function loadingSpinner(){
    const spinner = document.createElement('div');
    spinner.innerHTML = '<i class="fa-solid fa-spinner fa-2xl" style="color: #f9d801;"></i><p>Loading...</p>';
    spinner.className = 'spinner'
    infoArea.appendChild(spinner);
}


function removeSpinner() {
    const spinnerElement = document.querySelector('.spinner');
    if (spinnerElement) {
        infoArea.removeChild(spinnerElement);
    }
}

function getRandomNumber() {
    let newNumber;
    do {
        newNumber = Math.floor(Math.random() * 83) + 1;
    } while (newNumber === lastNumber);
    
    lastNumber = newNumber;
    return newNumber;
}

function errorElement(){
    const errorElem = document.createElement('div')
    errorElem.innerText = 'Oh no! That person isnt available.'
    infoArea.appendChild(errorElem)
}