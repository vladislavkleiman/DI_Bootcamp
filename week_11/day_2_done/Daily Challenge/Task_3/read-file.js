import { readFileSync } from 'fs';


const data = readFileSync('file-data.txt','utf-8')
console.log(data);
