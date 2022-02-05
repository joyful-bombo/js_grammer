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