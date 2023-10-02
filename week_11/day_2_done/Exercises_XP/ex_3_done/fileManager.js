const fs = require('fs')

function readFile(file){
    const data = fs.readFileSync(file,'utf-8')
    console.log(data);
}

function writeFile(file){
    const data = 'Writing to the file'
    fs.writeFileSync(file, data)
}

module.exports = {readFile, writeFile}