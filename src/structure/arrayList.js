class ArrayList {

  constructor () {
    this.array = []
  }

  insert (item) {
    this.array.push(item)
  }

  // 冒泡排序 - 循环 n-1 次 / 每次 从头到尾两两比较
  bubbleSort () {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this._swap(j, j + 1)
        }
      }
    }
  }

  // 冒泡排序优化 - 循环 n-1 次 / 每次 从头到尾两两比较，最后面的是已经排好的无需再排序
  bubbleSortExt () {
    for (let i = 0; i < this.array.length - 1; i++) {
      for (let j = 0; j < this.array.length - 1 - i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this._swap(j, j + 1)
        }
      }
    }
  }

  // 插入排序 - 从第二项开始循环到尾部，每一项和前面已经排序好的进行对比
  insertionSort () {
    for (let i = 1; i < this.array.length; i++) {
      let j = i - 1
      while (j >= 0 && this.array[j] > this.array[j + 1]) {
        this._swap(j, j + 1)
        j--
      }
    }
  }

  _swap (index1, index2) {
    const temp = this.array[index1]
    this.array[index1] = this.array[index2]
    this.array[index2] = temp
  }
}

export default ArrayList
