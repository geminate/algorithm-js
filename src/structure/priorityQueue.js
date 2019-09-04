import Queue from './queue'

// 优先队列
class PriorityQueue extends Queue {

  constructor () {
    super()
  }

  // 向优先队列中加入一个元素
  enqueue (item, priority) {
    const queueElement = new PriorityQueueItem(item, priority)
    if (this.isEmpty()) {
      this.queue.push(queueElement)
    } else {
      for (let i = 0; i <= this.size(); i++) {
        if (i === this.size()) {
          this.queue.push(queueElement)
          return
        }
        if (this.queue[i].priority > queueElement.priority) {
          this.queue.splice(i, 0, queueElement)
          return
        }
      }
    }
  }
}

// 优先队列元素
class PriorityQueueItem {

  constructor (item, priority) {
    this.item = item
    this.priority = priority
  }

}

export default PriorityQueue
