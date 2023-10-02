fetch("https://www.swapi.tech/api/starships/9/")
    .then(response => response.json())
    .then(objectStarWars => console.log(objectStarWars.result));


async function fetchdata(url) {
    const response = await fetch(url)
    const result = await response.json()
    console.log(result.result);
}

fetchdata("https://www.swapi.tech/api/starships/9/")