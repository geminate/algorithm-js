import { Queue } from '../structure'

const queueItem = new Queue()
console.log(queueItem.isEmpty())
queueItem.enqueue('Jone')
console.log(queueItem)
console.log(queueItem.isEmpty())
queueItem.enqueue('Jack')
console.log(queueItem.size())
console.log(queueItem.front())
queueItem.clear()
console.log(queueItem)
