//2

let navTag = document.getElementById('navBar')
console.log(navTag);

navTag.setAttribute('id', 'socialNetworkNavigation')

//3.1
let newLi = document.createElement('li')
console.log(newLi);

//3.2
let textNode = document.createTextNode('Logout')


//3.3
newLi.appendChild(textNode)

//3.4
let list = navTag.firstElementChild

list.appendChild(newLi)

//4

console.log(list.firstElementChild.textContent);
console.log(list.lastElementChild.textContent);