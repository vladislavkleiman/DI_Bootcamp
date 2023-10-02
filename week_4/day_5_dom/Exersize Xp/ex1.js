//1

const divEl = document.getElementById("container")

const valueDivEl = divEl.textContent;
console.log(valueDivEl);

//2
document.querySelectorAll('li')[1].innerHTML = 'Richard'


//3
document.querySelectorAll('li')[3].remove()

//4

const lists = document.querySelectorAll('.list')

lists.forEach(list => list.firstElementChild.textContent = 'Vlad')


//Bonus

lists.forEach(list => list.classList.add ('hui'))

lists[0].classList.add('university','attendance')