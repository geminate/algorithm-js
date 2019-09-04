import { Stack } from '../structure'

const stackItem = new Stack()
console.log(stackItem.isEmpty())
stackItem.push('hello-1')
console.log(stackItem)
console.log(stackItem.isEmpty())
stackItem.push('hello-2')
console.log(stackItem.size())
console.log(stackItem.peek())
stackItem.clear()
console.log(stackItem)
