// 链表
class LinkedList {

  constructor () {
    this.length = 0
    this.head = null
  }

  // 向链表最后追加元素
  append (element) {
    const node = new Node(element)
    if (this.head === null) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  // 向链表任意位置添加元素
  insert (pos, element) {
    const node = new Node(element)
    let current = this.head, previous
    if (pos === 0) {
      node.next = current
      this.head = node
      this.length++
      return true
    } else if (pos <= this.length) {
      while (pos > 0) {
        previous = current
        current = current.next
        pos--
      }
      previous.next = node
      node.next = current
      this.length++
      return true
    } else {
      return false
    }
  }

  // 从链表中移除指定位置的元素
  removeAt (pos) {
    let current = this.head, previous
    if (pos === 0) {
      this.head = current.next
      this.length--
      return current.element
    } else if (pos < this.length && pos > 0) {
      while (pos > 0) {
        previous = current
        current = current.next
        pos--
      }
      previous.next = current.next
      this.length--
      return current.element
    } else {
      return null
    }
  }

  // 从链表中移除元素
  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  // 元素查找
  indexOf (element) {
    let current = this.head, index = -1
    while (current) {
      if (current.element === element) {
        index++
        return index
      } else if (current.next) {
        index++
        current = current.next
      } else {
        return -1
      }
    }
  }

  // 链表是否为空
  isEmpty () {
    return this.length === 0
  }

  // 链表长度
  size () {
    return this.length
  }

  // 字符串转换
  toString () {
    let current = this.head, re = current.element
    while (current.next) {
      current = current.next
      re += ',' + current.element
    }
    return re
  }

}

// 节点
class Node {

  constructor (element) {
    this.element = element
    this.next = null
  }
}

export default LinkedList
