class HashTable {

  constructor () {
    this.items = []
  }

  put (key, value) {
    let index = this._hashCode(key)
    if (this.items[index] === undefined) {
      this.items[index] = new ValuePair(key, value)
    } else {
      while (this.items[index] !== undefined) {
        index++
      }
      this.items[index] = new ValuePair(key, value)
    }
  }

  get (key) {
    let index = this._hashCode(key)
    if (this.items[index] === undefined) {
      return undefined
    } else {
      while (this.items[index].key !== key) {
        index++
      }
      return this.items[index].value
    }
  }

  remove (key) {
    let index = this._hashCode(key)
    if (this.items[index] === undefined) {
      return undefined
    } else {
      while (this.items[index].key !== key) {
        index++
      }
      this.items[index] = undefined
    }
  }

  print () {
    this.items.forEach((items, i) => {
      items && console.log(i + ':' + items)
    })
  }

  _hashCode (key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % 37
  };
}

class ValuePair {
  constructor (key, value) {
    this.key = key
    this.value = value
  }

  toString () {
    return this.key + ':' + this.value
  }
}

export default HashTable
