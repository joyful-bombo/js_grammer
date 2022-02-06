const user = {
  name: 'Jongwoon',
  age: 85,
  emails: ['bombo96@naver.com, dkflfkdtm2@gmail.com']
}

const copyUser = Object.assign({}, user) // const copyUser = user <-- Deep Copy 메모리주소 복사 ** 주의
console.log(user === copyUser)