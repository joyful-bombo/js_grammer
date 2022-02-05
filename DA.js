// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
  name: 'Jongwoon',
  age: 27,
  email: 'bombo96@naver.com'
}

const { name, age, email, address } = user

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name} 사용자의 나이는 ${age}입니다.`)
console.log(`${name} 사용자의 이메일 주소는 ${email}입니다.`)
console.log(`${name} 사용자의 주소는 ${address}입니다.`)

const user2 = {
  name2: 'Jongwoon',
  age2: 27,
  email2: 'bombo96@naver.com'
}

const {name2, age2, email2, address2 = 'Korea' } = user2

console.log(`사용자의 이름은 ${name2}입니다.`)
console.log(`${name2} 사용자의 나이는 ${age2}입니다.`)
console.log(`${name2} 사용자의 이메일 주소는 ${email2}입니다.`)
console.log(`${name2} 사용자의 주소는 ${address2}입니다.`)

const user3 = {
  name3: 'Jongwoon',
  age3: 27,
  email3: 'bombo96@naver.com',
  address3: 'USA'
}

const { name3, age3, email3, address3 = 'Korea' } = user3

const eg = name3
console.log(`사용자의 이름은 ${eg}입니다.`)
console.log(`${eg} 사용자의 나이는 ${age3}입니다.`)
console.log(`${name3} 사용자의 이메일 주소는 ${email3}입니다.`)
console.log(`${name3} 사용자의 주소는 ${address3}입니다.`)

const fruits = ['apple', 'banana', 'cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d)

const [, , cherry] = fruits
console.log(cherry)