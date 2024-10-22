let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let subject = Number(input[0])
let point = input[1].split(' ').map(Number);


let maxValue = Math.max(...point)
let arr = point.map(e => e / maxValue * 100)
console.log(arr.reduce((a, b) => a + b , 0) /subject)