function compareToTen(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num <= 10) {
                resolve('Number is less than or equal to 10');
            } else {
                reject('Number is more than 10');
            }
        }, 4000);
    });
}





compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))