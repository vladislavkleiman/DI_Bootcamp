const fs = require('fs')


const directPath = './'

fs.readdir(directPath, (err, files) => {
    if (err) {
        console.error('Error reading the directory:', err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    });
});