// object : {} 객체
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object

const userAge =  {
  name: 'Jongwoon',
  age: 27
}

const userEmail = {
  name: 'Jongwoon',
  email: 'bombo96@naver.com'
}

const target2 = Object.assign({}, userAge, userEmail)
console.log(userAge)
console.log(userEmail)
console.log(target2)
const target = Object.assign(userAge, userEmail)
console.log(userAge)
console.log(target)
console.log(userAge === target)

const a = { k : 111 }
const b = { k : 222 }
console.log(a === b)

const user = {
  name: 'JongWoon',
  age: 27,
  email: "bombo96@naver.com"
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)