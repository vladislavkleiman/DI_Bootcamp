(function name(name){
    const crDiv = document.createElement('div')
    crDiv.innerText = name;
    const navbar = document.querySelector('.navbar')
    navbar.appendChild(crDiv)
})('Vlad')