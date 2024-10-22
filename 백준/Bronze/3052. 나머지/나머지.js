let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let data = input.map(Number)
let set = new Set()
for (let i = 0; i < 10; i++) {

    let 나누기 = Math.floor(data[i] % 42)
    set.add(나누기)

}

console.log(set.size)