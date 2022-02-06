// 데이터 불변성(Immutability)
// 원시 데이터: String, Number, Boolean, undefined, null
// 참조형 데이터: Object, Array, Function

let a = { k : 1 } // 0x01
let b = { k : 1 } // 0x08

console.log(a, b, a===b)

a.k = 7
b = a // 0x01

console.log(a, b, a === b)
a.k = 2
console.log(a, b, a === b)
let c = b // 0x01
console.log(a, b, c, a === c)
a.k = 9
console.log(a, b, c, a === c)

// Same Memory Address