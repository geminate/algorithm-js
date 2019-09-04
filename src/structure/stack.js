// 栈
class Stack {

  constructor () {
    this.stack = []
  }

  // 向栈顶压入一个元素
  push (item) {
    return this.stack.push(item)
  }

  // 移除并返回栈顶的元素
  pop () {
    return this.stack.pop()
  }

  // 返回栈顶的元素
  peek () {
    return this.stack[this.stack.length - 1]
  }

  // 判断是否是空栈
  isEmpty () {
    return this.stack.length === 0
  }

  // 清空栈
  clear () {
    this.stack.length = 0
  }

  // 返回栈内元素个数
  size () {
    return this.stack.length
  }
}

export default Stack
