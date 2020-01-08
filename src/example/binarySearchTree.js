import { BinarySearchTree } from '../structure'

const a = new BinarySearchTree()
a.insert(24)
a.insert(12)
a.insert(36)
a.insert(6)
a.insert(18)
a.insert(14)
a.insert(20)
a.insert(48)
a.insert(40)

// a.inOrderTraverse((item) => {
//   console.log(item)
// })
//
// a.preOrderTraverse((item) => {
//   console.log(item)
// })
//
// a.postOrderTraverse((item) => {
//   console.log(item)
// })

// console.log('最小值：', a.min())
// console.log('最大值：', a.max())

// console.log(a.search(13))

a.remove(24)
a.inOrderTraverse((item) => {
  console.log(item)
})

