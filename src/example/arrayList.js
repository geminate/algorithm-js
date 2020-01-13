import { ArrayList } from '../structure'

const a = new ArrayList()
// for (let i = 0; i <= 10; i++) {
//   a.insert(parseInt((Math.random() * 100 + '')))
// }
a.insert(9)
a.insert(1)
a.insert(4)
a.insert(2)
a.insert(3)
a.insert(6)

const time = new Date().getTime()
a.quickSort()
console.log(a)
// console.log(new Date().getTime() - time)


