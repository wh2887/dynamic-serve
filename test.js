const fs = require('fs')

// 模拟 读数据库
const users = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(users)
console.log(usersArray)

// 模拟 写数据库
const newUser = { "id": "4", "name": "Frank", "password": "zzz" }
usersArray.push(newUser)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)
console.log(usersArray)