const planets = ['Mercury', 'Venus' , 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus','Neptune']

for (const planet of planets) {
    const div = document.createElement('div')
    div.classList.add('planet')
    div.classList.add(planet.toLowerCase())
    
    const section = document.querySelector('.listPlanets')
    section?.appendChild(div)
}