const fs = require('fs')

function copyInfo (file1,file2){
    const data = fs.readFileSync(file1,'utf-8')  
    rewrite(file2,data)

}

function rewrite(file,data){
    fs.writeFileSync(file,data)
}

copyInfo('source.txt','destination.txt')