// Array: []
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

const numbers = [1, 2, 3 ,4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => {
  return number < 3
})
console.log(a)

const b = numbers.filter(number => {
  return number < 3
})
console.log(b)

const c =  fruits.find(fruit => {
  return /^B/.test(fruit)
})
console.log(c)

const d =  fruits.findIndex(fruit => {
  return /^C/.test(fruit)
})
console.log(d)

const e = numbers.includes(3)
console.log(e)

const f = numbers.includes('wow')
console.log(f)

numbers.push(5) // 맨 뒤에 넣기 원본 수정
console.log(numbers)

numbers.unshift(0) // 맨 앞에 넣기 원본 수정
console.log(numbers)

numbers.splice(2, 3) // index 숫자 삭제 (index, 개수) 원본 수정
console.log(numbers)

numbers.splice(3, 0, 7) // (index, 삭제 개수 0, 숫자) 숫자 인덱스에 push
console.log(numbers)