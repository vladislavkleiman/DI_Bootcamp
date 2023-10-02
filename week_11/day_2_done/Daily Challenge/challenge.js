import greet from './Task_1/greeting.js'
import colorText from './Task_2/colorful-message.js'

greet(colorText('Bob hello!'))

import { readFileSync } from 'fs';


const data = readFileSync('file-data.txt','utf-8')
console.log(data);