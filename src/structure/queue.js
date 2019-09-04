// 队列
class Queue {

  constructor () {
    this.queue = []
  }

  // 队尾加入元素
  enqueue (item) {
    this.queue.push(item)
  }

  // 移除并返回队列中的第一项
  dequeue () {
    return this.queue.shift()
  }

  // 返回队列中第一项
  front () {
    return this.queue[0]
  }

  // 判断队列是否为空
  isEmpty () {
    return this.queue.length === 0
  }

  // 清空队列
  clear () {
    this.queue.length = 0
  }

  // 返回队列长度
  size () {
    return this.queue.length
  }

}

export default Queue
