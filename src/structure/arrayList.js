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

  // 归并排序 - 将数组拆成单项后再组合排序
  mergeSort () {
    this.array = this._mergeSortRec(this.array)
  }

  // 快速排序
  quickSort () {
    this._quick(this.array, 0, this.array.length - 1)
  }

  _quick (arr, left, right) {
    if (arr.length > 1) {
      const index = this._partition(arr, left, right) // 主元下标 index
      if (left < index - 1) {
        this._quick(arr, left, index - 1)
      }
      if (index < right) {
        this._quick(arr, index, right)
      }
    }
  }

  _partition (arr, left, right) {
    let pivot = arr[Math.floor((left + right) / 2)], l = left, r = right
    while (l <= r) {
      while (arr[l] < pivot) {
        l++
      }
      while (arr[r] > pivot) {
        r--
      }
      if (l <= r) {
        this._swap(l, r)
        l++
        r--
      }
    }
    return l
  }

  _mergeSortRec (arr) {
    if (arr.length === 1) {
      return arr
    } else {
      const mid = Math.round(arr.length / 2)
      const leftArr = arr.slice(0, mid)
      const rightArr = arr.slice(mid, arr.length)
      return this._merge(this._mergeSortRec(leftArr), this._mergeSortRec(rightArr))
    }
  }

  _merge (left, right) {
    let re = [], il = 0, ir = 0
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        re.push(left[il])
        il++
      } else {
        re.push(right[ir])
        ir++
      }
    }
    while (il >= left.length && ir < right.length) {
      re.push(right[ir])
      ir++
    }
    while (ir >= right.length && il < left.length) {
      re.push(left[il])
      il++
    }
    return re
  }

  _swap (index1, index2) {
    const temp = this.array[index1]
    this.array[index1] = this.array[index2]
    this.array[index2] = temp
  }
}

export default ArrayList
