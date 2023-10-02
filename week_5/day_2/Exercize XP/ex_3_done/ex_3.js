let allBoldItems;

function getBoldItems() {
    allBoldItems = document.getElementsByTagName('strong')
}



function highlight() {
    getBoldItems()
    for (const boldItems of allBoldItems) {
        boldItems.style.color = 'blue'
    }
}



function returnItemsToDefault() {
    getBoldItems()
    for (const boldItems of allBoldItems) {
        boldItems.style.color = 'black'
    }
}

const paragraph = document.querySelector('p')

paragraph.addEventListener('mouseover', highlight)
paragraph.addEventListener('mouseout', returnItemsToDefault)