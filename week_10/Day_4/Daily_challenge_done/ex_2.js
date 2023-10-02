const button = document.getElementById('search')
button.addEventListener('click', searchData)
const city1latitude = document.getElementById('city1latitude')
const city1longitude = document.getElementById('city1longitude')
const city2latitude = document.getElementById('city2latitude')
const city2longitude = document.getElementById('city2longitude')


function searchData(event){
    event.preventDefault()
    const promise1 = fetch(`https://api.sunrise-sunset.org/json?lat=${city1latitude.value}&lng=${city1longitude.value}`).then((res)=> res.json())
    const promise2 = fetch(`https://api.sunrise-sunset.org/json?lat=${city2latitude.value}&lng=${city2longitude.value}`).then((res)=> res.json())
    Promise.all([promise1,promise2]).then((res)=>{
        const sunrise1 = res[0].results.sunrise;
        const sunrise2 = res[1].results.sunrise;
        console.log(`Time of sunrise city 1: `, sunrise1);
        console.log(`Time of sunrise city 2: `, sunrise2);
    }).catch((err)=>console.log(err))
}