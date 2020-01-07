import LinkedList from './linkedList'

// 双向链表
class DoublyLinkedList extends LinkedList {

  constructor () {
    super()
    this.tail = null
    this.head = null
  }

  // 向链表最后追加元素
  append (element) {
    const node = new Node(element)
    if (this.tail === null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
  }

  // 向链表任意位置添加元素
  insert (pos, element) {
    const node = new Node(element)
    if (pos === 0) {
      node.next = this.head
      this.head.prev = node
      this.head = node
      this.length++
      return true
    } else if (pos === this.length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
      this.length++
      return true
    } else if (pos < this.length / 2 && pos > 0) {
      let current = this.head, pre
      while (pos > 0) {
        pre = current
        current = current.next
        pos--
      }
      pre.next = element
      element.prev = pre
      element.next = current
      current.prev = element

    } else if (pos >= this.length / 2 && pos < this.length) {
      let current = this.tail, next
      pos = this.length - pos
      while (pos > 0) {
        next = current
        current = current.prev
        pos--
      }
      current.next = element
      element.prev = current
      element.next = next
      next.prev = element
    } else {
      return false
    }
  }

  // 从链表中移除指定位置的元素
  removeAt (pos) {
    // SAME
  }

}

// 节点
class Node {

  constructor (element) {
    this.element = element
    this.prev = null
    this.next = null
  }
}

export default DoublyLinkedList
