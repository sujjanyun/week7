'use strict';

let answer = 0

// console.log(process.argv)

for (let index = 2; index < process.argv.length; index++) {
    answer += Number(process.argv[index]);
}

console.log(answer);



// 'use strict'
    
// let result = 0

// for (let i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)