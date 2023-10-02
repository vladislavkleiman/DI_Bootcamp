function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(element => typeof element === 'string')) {
            const arr2 = arr.map(elem => elem.toUpperCase());
            resolve(console.log(arr2));
        } else {
            reject('sorry');
        }
    });
}


makeAllCaps([1, "pear", "banana"]).then((result) => console.log(result)).catch((err)=> console.log(err))
makeAllCaps(["apple", "pear", "banana"]).then((result) => console.log(result)).catch((err)=> console.log(err))

function sortWords(arr) {
    return new Promise((resolve,reject) => {
        if (arr.length >= 4) {
            arr.sort()
            resolve(arr)
        } else {
            reject('sorry')
        }
    })
}

sortWords(["apple", "pear", "banana", "melon", "kiwi"]).then((result) => console.log(result)).catch((err)=> console.log(err))